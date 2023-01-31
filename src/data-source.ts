import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"
import { DataSource } from "typeorm"
import { User } from "./entitys/user.entity"

const config: PostgresConnectionOptions = {
  type: "postgres",
  host: String(process.env.DB_HOST ?? "pg_container"),
  port: String(process.env.DB_PORT ?? 5432) as number | any,
  username: String(process.env.DB_USER ?? "fennec"),
  password: String(process.env.DB_PASS ?? "fennec"),
  database: String(process.env.DB_DATA ?? "fennec"),
  synchronize: true,
  logging: true,
  // logger: 'file',
  entities: [
    User,
  ]
}

export const dataSource = new DataSource(config)