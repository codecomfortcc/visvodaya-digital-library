import express from "express";
import {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
  resendToken
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verify-token.js";
import { signupValidator,loginValidator,verifyEmailValidator, resendTokenValidator } from "../validators/auth.validator.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup",signupValidator, signup);
router.post("/login",loginValidator, login);
router.post("/logout",logout);
router.post("/verify-email", verifyEmailValidator, verifyEmail);
router.post("/resend-token",resendTokenValidator, resendToken)
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
