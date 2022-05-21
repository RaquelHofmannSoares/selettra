import { Router } from "express";
import { AuthenticateUserController } from "modules/users/services/authenticateUser/AuthenticateUserController";
import { RefreshUserTokenController } from "modules/users/services/refreshToken/RefreshUserTokenController";

const authenticateUserController = new AuthenticateUserController();
const refreshUserTokenController = new RefreshUserTokenController();

const authenticateRoutes = Router();

authenticateRoutes.post("/session", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshUserTokenController.handle);

export { authenticateRoutes };
