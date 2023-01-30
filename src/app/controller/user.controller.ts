import { NextFunction, Request, Response } from "express";
import { Controller } from "../../lib/controller";
import UserService from "../service/user.service";

class UserController extends Controller {
  private userSevice = new UserService()

  public async newUser(req: Request, res: Response, next: NextFunction) {

  }

  public async getUserList(req: Request, res: Response, next: NextFunction) { }

  public async getUser(req: Request, res: Response, next: NextFunction) { }

  public async editUser(req: Request, res: Response, next: NextFunction) { }

  public async deleteUser(req: Request, res: Response, next: NextFunction) { }
}

export default new UserController()