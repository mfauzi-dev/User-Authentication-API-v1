import express from "express";
import {
    getUserProfile,
    updatePassword,
    updateProfile,
} from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const routes = express.Router();

routes.get("/me", authenticate, getUserProfile);
routes.patch("/me/update-password", authenticate, updatePassword);
routes.patch("/me/update-profile", authenticate, updateProfile);

export { routes };
