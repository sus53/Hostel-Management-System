import axios from "axios";
const URL = "https://hostel-management-system-five.vercel.app/hostelreview"

export const GetHostelReview = (hostel) => axios.post(URL, hostel)
export const AddHostelReview = (hostelreview) => axios.post(URL + "/addhostelreview", hostelreview)