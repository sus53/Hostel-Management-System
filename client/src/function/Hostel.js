import * as api from '../api/Hostel';

export const GetVerifiedHostel = async () => {
    try {
        const { data } = await api.GetVerifiedHostel();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const GetHostel = async (email) => {
    try {
        const { data } = await api.GetHostel(email);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const GetUnverifiedHostel = async () => {
    try {
        const { data } = await api.GetUnverifiedHostel();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const AddHostel = async (hostel) => {
    try {
        const { data } = await api.AddHostel(hostel);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const EditHostel = async (updatedData) => {
    try {
        const { data } = await api.EditHostel(updatedData);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteHostel = async (hostelId) => {
    try {
        const { data } = await api.DeleteHostel(hostelId);
        return data;
    } catch (error) {
        console.log(error);
    }
}
