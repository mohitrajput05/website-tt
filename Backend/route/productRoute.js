const express = require('express');
const router = express.Router();

const productController = require("../controller/productController");

const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });
router.post('/add-product',upload.single('productImage'),productController.addProduct);
router.get('/view-product',productController.viewProduct);
router.post('/update-product',upload.single('productImage'),productController.updateProduct);
router.post('/delete-product',productController.deleteProduct);


module.exports= router;