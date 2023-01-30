import { Router } from "express";
import UserController from "../app/controller/user.controller";

const apiRoutes = Router()

apiRoutes.post("/register", (req, res, next) => UserController.newUser(req, res, next))
apiRoutes.get("/user", (req, res, next) => UserController.getUserList(req, res, next))
apiRoutes.get("/user/:id", (req, res, next) => UserController.getUser(req, res, next))

export default apiRoutes