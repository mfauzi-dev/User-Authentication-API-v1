import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { logout } from "../controllers/user.controller.js";

const publicRoutes = express.Router();

publicRoutes.post("/register", register);
publicRoutes.post("/login", login);
publicRoutes.post("/logout", logout);

export { publicRoutes };
