import "reflect-metadata"
import { config } from "dotenv"
import { DataSource } from "typeorm"
import { Entity1 } from "../entities/Entity1"
import { Entity2 } from "../entities/Entity2"

config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  synchronize: Boolean(process.env.SYNCHRONIZE_DB),
  logging: false,
  entities: [Entity1, Entity2],
})