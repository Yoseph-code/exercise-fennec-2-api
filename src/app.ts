import express, { Application } from "express";
import cors from "cors"
import bodyParser from "body-parser";
import apiErrorHandler from "./errors/api-error-handler";

class App {
  public express: Application

  constructor() {
    this.express = express()
  }

  private database() { }

  private middlewares() {
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
  }

  private routes() {
    this.express.use("/v1")

    this.express.use(apiErrorHandler)
  }
}