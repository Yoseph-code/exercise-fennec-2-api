import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"
import { DataSource } from "typeorm"
import { User } from "./entitys/user.entity"

const config: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as number | any,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATA,
  synchronize: true,
  logging: true,
  // logger: 'file',
  entities: [
    User,
  ]
}

export const dataSource = new DataSource(config)