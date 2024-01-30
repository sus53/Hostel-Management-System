import jwt from 'jsonwebtoken';
import User from '../model/User.js';
import bcrypt from 'bcrypt';
import { jwtDecode } from 'jwt-decode';

export const GetUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch {
        res.status(404).json({ messsage: error.messsage })
    }
}

export const SignupUser = async (req, res) => {
    let user = req.body;
    let logWithToken = false;
    try {

        if (user.ctoken) {
            user = jwtDecode(user.ctoken);
            logWithToken = true;
        }

        let userdb = await User.findOne({ email: user.email });

        if (userdb) return res.status(200).json({ message: "User already registered" });

        const salt = await bcrypt.genSalt();
        let newUser = "";

        if (logWithToken) {
            const hashedPassword = await bcrypt.hash(user.sub, salt);
            newUser = new User({
                firstname: user.given_name, lastname: user.family_name, email: user.email, username: user.name, password: hashedPassword, gender: "Male"
            })
        }
        else {
            const hashedPassword = await bcrypt.hash(user.password, salt);
            newUser = new User({
                firstname: user.firstname, lastname: user.lastname, email: user.email, username: user.username, mobilenumber: user.mobilenumber, password: hashedPassword, gender: user.gender
            })
        }

        const token = createToken(newUser);
        res.cookie("access-token", token, {
            maxAge: 60 * 60 * 24 * 30 * 1000
        })

        await newUser.save()
        delete newUser.password;

        res.status(201).json({ user: newUser, message: "User Registered sucessfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const LoginUser = async (req, res) => {
    let user = req.body;
    let logWithToken = false;
    try {

        if (user.ctoken) {
            user = jwtDecode(user.ctoken);
            logWithToken = true;
        }

        const userDB = await User.findOne({ email: user.email })
        if (!userDB) return res.status(404).json({ message: "User does not exist" });

        if (!logWithToken) {
            const validPassword = await bcrypt.compare(user.password, userDB.password)
            if (!validPassword) return res.status(404).json({ message: "Invalid credentials" });
        }

        const token = createToken(userDB)
        delete userDB.password;

        res.cookie("access-token", token, {
            maxAge: 60 * 60 * 24 * 30 * 1000
        })

        return res.status(201).json({ user: userDB, message: "Log in Successfull" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createToken = (user) => {
    return jwt.sign({ id: user.email }, process.env.SECRET_KEY)
}