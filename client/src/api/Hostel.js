import axios from "axios";
const URL = "https://hostel-management-system-five.vercel.app/hostel"

export const GetVerifiedHostel = () => axios.get(URL + "/verified");
export const GetUnverifiedHostel = () => axios.get(URL + "/unverified");
export const AddHostel = (hostel) => axios.post(`${URL}/addhostel`, hostel);
export const EditHostel = (hostel) => axios.patch(`${URL}/${hostel._id}`, hostel);
export const DeleteHostel = (id) => axios.delete(`${URL}/${id}`);
export const GetHostel = (email) => axios.post(URL, email)