import { Router } from "express";
import UserController from "../app/controller/user.controller";

const apiRoutes = Router()

apiRoutes.post("/register", (req, res, next) => UserController.newUser(req, res, next))

export default apiRoutes