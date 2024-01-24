import * as api from '../api/Hostel';

export const GetHostel = async () => {
    try {
        const { data } = await api.GetHostel();
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
    } catch(error) {
        console.log(error);
    }
}