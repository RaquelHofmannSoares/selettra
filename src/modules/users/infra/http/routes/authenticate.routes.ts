import { Router } from "express";
import { AuthenticateUserController } from "modules/users/services/authenticateUser/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const authenticateRoutes = Router();

authenticateRoutes.post("/session", authenticateUserController.handle);

export { authenticateRoutes };
