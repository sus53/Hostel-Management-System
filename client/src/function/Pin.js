import * as api from '../api/Pin'

export const GetPin = async () => {
    try {
        const { data } = await api.GetPin();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const CreatePin = async (pin) => {
    try {
        const { data } = await api.CreatePin(pin);
        return data;
    } catch (error) {
        console.log(error);
    }
}