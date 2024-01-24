import { LoginUser } from "../function/User";

export const googleSignIn = async (cred) => {

    const user = { ctoken: cred }
    const res = await LoginUser(user);
    return res;
}