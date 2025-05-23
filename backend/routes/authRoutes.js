const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

router.post("/signup", auth.signup);
router.post("/login", auth.login);
router.post("/send-otp", auth.sendOTPReset);
router.post("/verify-otp", auth.verifyOTP);
router.post("/reset-password", auth.resetPassword);


module.exports = router;
