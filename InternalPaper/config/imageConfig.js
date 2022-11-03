const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: (request, file, calback) => {
        calback(null, path.join(__dirname, "../public/uploads"));
    },
    filename: (request, file, callback) => {
        if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg")
            callback(null, `${Date.now()}_${file.originalname}`);
        else
            callback(new Error(`Invalid file formate`))
    }
})
module.exports = multer({ storage: storage });