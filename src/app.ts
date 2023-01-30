import express, { Application } from "express";
import cors from "cors"
import bodyParser from "body-parser";
import apiErrorHandler from "./errors/api-error-handler";
import { dataSource } from "./data-source";
import apiRoutes from "./routes/apiRoutes";

class App {
  public express: Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
    this.database()

  }

  private database() {
    dataSource.initialize()
  }

  private middlewares() {
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
  }

  private routes() {
    this.express.use("/v1", apiRoutes)

    this.express.use(apiErrorHandler)
  }
}

export default new App().express