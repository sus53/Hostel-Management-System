import mongoose from "mongoose";

const PinSchema = new mongoose.Schema({
    lng: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    hostelOwnerId: {
        type: Number,
        required: true
    },

}, { timestamps: true });
const Pin = new mongoose.model("Pin", PinSchema);
export default Pin;