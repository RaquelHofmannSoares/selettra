import "reflect-metadata";
import cors from "cors";
import express from "express";
import "express-async-errors";
import helmet from "helmet";

import createConnection from "../typeorm";
import { router } from "./routes";

createConnection();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

export { app };
