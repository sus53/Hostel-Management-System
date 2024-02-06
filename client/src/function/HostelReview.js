import * as api from '../api/HostelReview'

export const GetHostelReview = async (hostel) => {
    try {
        const { data } = await api.GetHostelReview(hostel);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const AddHostelReview = async (hostelreview) => {
    try {
        const { data } = await api.AddHostelReview(hostelreview)
        return data;
    } catch (error) {
        console.log(error)
    }
}