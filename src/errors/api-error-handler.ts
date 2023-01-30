import { NextFunction, Request, Response } from "express";
import { BaseError } from "../lib/error/base-error";

export default function apiErrorHandler(err: BaseError, req: Request, res: Response, next: NextFunction) {
  console.log(err)

  if (err instanceof BaseError) {
    res.status(err.status).json({ message: err.message })
    return
  }

  res.status(500).json({ message: "internal error" })
}