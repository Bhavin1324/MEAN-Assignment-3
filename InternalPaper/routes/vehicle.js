const { createVehicle, createCategory, getAllVehicle, getAllCategory, uploadImage } = require("../controller/vehicleController");
const router = require("express").Router();
const multer = require("../config/imageConfig");
router.route("/").get(getAllVehicle).post(createVehicle);
router.route("/category").get(getAllCategory).post(createCategory);
router.route("/image").post(multer.single("image"), uploadImage)
module.exports = router;