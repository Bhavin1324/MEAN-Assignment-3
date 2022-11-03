const { Category, Vehicle } = require("../models/vehicle");

const createCategory = async (req, res) => {
    const data = await Category.create(req.body);
    res.status(201).json(data);
}
const createVehicle = async (req, res) => {
    const data = await Vehicle.create(req.body);
    res.status(201).json(data);
}
const getAllVehicle = async (req, res) => {
    const data = await Vehicle.find({});
    res.status(200).json(data);
}
const getAllCategory = async (req, res) => {
    const data = await Category.find({});
    res.status(200).json(data);
}
const uploadImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ data: { src: "", err: "Upload image first" } })
    }
    res.status(200).json({ data: { src: `uploads/${req.file.filename}`, err: "" } })
}
module.exports = { createVehicle, createCategory, getAllCategory, getAllVehicle, uploadImage };