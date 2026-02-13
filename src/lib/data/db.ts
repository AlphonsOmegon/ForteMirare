import "reflect-metadata";
import { AppDataSource } from "./data-source";

let initialized = false;

export async function getDB() {
  if (!initialized) {
    await AppDataSource.initialize();
    initialized = true;
  }
  return AppDataSource;
}