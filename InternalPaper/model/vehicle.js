const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        require: [true, "category name is required"],
    }
})
const vehicleSchema = new mongoose.Schema({
    vehicleBrand: {
        type: String,
        require: [true, "vehicle brand name is required"],
    },
    categoryName: {
        type: String,
        require: [true, "category name is required"],
        ref: categorySchema
    },
    vehiclePrice: {
        type: Number,
        require: [true, "vehicle price is required"],
    },
    picture: {
        type: String,
        require: [true, "picture is required"],
    },
    depreciation: {
        type: String,
        require: [true, "depreciation is required"],
    },
    noy: {
        type: Number,
        require: [true, "number of year is required"],
    },
    totalPrice: {
        type: Number,
        require: [true, "total pirce is required"],
    }
})
const Category = mongoose.model("Categories", categorySchema);
const Vehicle = mongoose.model("Vehicles", vehicleSchema);
module.exports = { Category, Vehicle }
