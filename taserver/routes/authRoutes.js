const express = require("express");
const { userLogin, userSignup, adminLogin } = require("../controllers/authController");

const router = express.Router();

router.post('/login',userLogin);

router.post('/signup',userSignup);

router.get('/admin',adminLogin);



module.exports = router;