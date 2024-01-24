import mongoose from "mongoose";
 
const HostelSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    room: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Hostel = new mongoose.model("Hostel", HostelSchema);
export default Hostel;