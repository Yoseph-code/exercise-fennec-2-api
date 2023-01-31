import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { BadRequest, NotFound } from "../../errors/api-errors";
import { Controller } from "../../lib/controller";
import UserService from "../service/user.service";

class UserController extends Controller {
  private userSevice = new UserService()

  public async newUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        cpf: z.string(),
        birthDate: z.string(),
        salary: z.number()
      })

      const parsed = userSchema.parse(req.body)

      const { message } = await this.userSevice.newUser(parsed)

      return res.status(201).json({
        message
      })
    } catch (err: any) {
      if (Array.isArray(err.issues)) {
        return next(new BadRequest(err.issues[0].message))
      }

      if (err?.message) {
        return next(new BadRequest(err.message))
      }
      return next(new NotFound(err))
    }
  }

  public async getUserList(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, size, keyword } = req.query

      const data = await this.userSevice.getUserList(Number(page ?? 0), Number(size ?? 10), String(keyword))

      res.json(data)
    } catch (err: any) {
      if (err?.message) {
        return next(new BadRequest(err.message))
      }
      return next(new NotFound(err))
    }
  }

  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const result = await this.userSevice.getUser(String(id))

      res.json(result)
    } catch (err: any) {
      if (err?.message) {
        return next(new BadRequest(err.message))
      }
      return next(new NotFound(err))
    }
  }

  public async editUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        cpf: z.string(),
        birthDate: z.string(),
        salary: z.number()
      })

      const parsed = userSchema.parse(req.body)

      const { message } = await this.userSevice.editUser(req.params.id, parsed)

      return res.json({
        message
      })
    } catch (err: any) {
      if (Array.isArray(err.issues)) {
        return next(new BadRequest(err.issues[0].message))
      }

      if (err?.message) {
        return next(new BadRequest(err.message))
      }
      return next(new NotFound(err))
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const { message } = await this.userSevice.deleteUser(id)

      return res.json({
        message
      })
    } catch (err: any) {
      return next(new NotFound(err))
    }
  }
}

export default new UserController()