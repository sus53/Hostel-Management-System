import * as api from '../api/User'

export const GetUser = async () => {
    try {
        const { data } = await api.GetUser();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const SignupUser = async (user) => {
    try {
        const { data } = await api.SignupUser(user);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const LoginUser = async (user) => {
    try {
        const { data } = await api.LoginUser(user);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const forgotPassword = async (user) => {
    try {
        const { data } = await api.ForgotPassword(user);
        return data
    } catch (error) {
        console.log(error)
    }
}