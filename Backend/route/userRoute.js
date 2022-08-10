const express = require("express");
const router =  express.Router();

const userController = require('../controller/userController.js')

router.post('/signUp',userController.register);
router.post('/signIn',userController.login)

module.exports = router;