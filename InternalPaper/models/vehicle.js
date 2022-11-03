const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "category name is required"],
    }
})
const vehicleSchema = new mongoose.Schema({
    vehicleBrand: {
        type: String,
        required: [true, "vehicle brand name is required"],
    },
    categoryName: {
        type: String,
        required: [true, "category name is required"],
        ref: "Categories"
    },
    vehiclePrice: {
        type: Number,
        required: [true, "vehicle price is required"],
    },
    picture: {
        type: String,
        required: [true, "picture is required"],
    },
    depreciation: {
        type: Number,
        required: [true, "depreciation is required"],
    },
    numberOfYears: {
        type: Number,
        required: [true, "number of year is required"],
    },
    totalPrice: {
        type: Number,
        required: [true, "total pirce is required"],
    }
});
const Category = mongoose.model("Categories", categorySchema);
const Vehicle = mongoose.model("Vehicles", vehicleSchema);
module.exports = { Category, Vehicle }
