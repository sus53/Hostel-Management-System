import * as api from '../api/HostelReview'

export const GetHostelReview = async () => {
    try {
        const { data } = await api.GetHostelReview();
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