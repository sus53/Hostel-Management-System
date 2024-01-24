import axios from "axios";
const URL = "http://localhost:5000/hostel"

export const GetHostel = () => axios.get(URL);
export const AddHostel = (hostel) => axios.post(`${URL}/`, hostel);
export const EditHostel = (hostel) => axios.put(`${URL}/${hostel._id}`, hostel);
export const DeleteHostel = (id) => axios.delete(`${URL}/${id}`);

