import express from "express";
import { login, register } from "../controllers/auth.controller.js";

const publicRoutes = express.Router();

publicRoutes.post("/register", register);
publicRoutes.post("/login", login);

export { publicRoutes };
