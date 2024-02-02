import Hostel from "../model/Hostel.js";
import mongoose from "mongoose";

export const GetHostel = async (req, res) => {
    try {
        const hostel = await Hostel.find()
        res.status(200).json(hostel)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

export const AddHostel = async (req, res) => {
    const { title, description, room, price, location, sex, imagePath, latlng } = req.body
    try {
        let hostel = await Hostel.findOne({ title: title })

        if (hostel) { return res.status(200).json({ message: "hostel already added" }) }

        const newHostel = new Hostel({
            title, description, room, price, location, sex, imagePath, latlng
        })

        await newHostel.save();

        res.status(201).json({ message: "New hostel added", success: true })

    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

export const EditHostel = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, room, price, location, sex } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'hostel id is missing' });
        }
        const updatedHostel = await Hostel.findByIdAndUpdate(
            id,
            { title, description, room, price, location, sex },
            { new: true }
        );
        if (!updatedHostel) {
            return res.status(404).json({ message: 'hostel not found' });
        }
        res.status(200).json({ message: 'hostel updated sucessfully', laptop: updatedHostel })
    } catch (error) {
        console.error('error updating hostel', error);
        res.status(500).json({ message: 'Error updating hostel', error: error.message })
    }
}

export const DeleteHostel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'hostel id is missing in the request body' })
        }
        const deletedHostel = await Hostel.findOneAndDelete({ _id: id });
        if (!deletedHostel) {
            return res.status(404).json({ message: 'hostel not found' })
        }
        res.status(200).json({ message: 'hostel deleted sucessfully' });
    } catch (error) {
        console.error('error deleting hostel', error);
        res.status(500).json({ message: 'error deleting hostel', error: error.message })
    }
}