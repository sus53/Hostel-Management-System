import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})
const User = new mongoose.model("User", userSchema);
export default User;