import axios from "axios";
const URL = "http://localhost:5000/hostelreview"

export const GetHostelReview = () => axios.get(URL)
export const AddHostelReview = (hostelreview) => axios.post(URL, hostelreview)