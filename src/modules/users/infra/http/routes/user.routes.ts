import { Router } from "express";
import { CreateUserController } from "modules/users/services/createUser/CreateUserController";
import { GetUserController } from "modules/users/services/getUser/GetUserController";

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getUserController.handle);

export { userRoutes };
