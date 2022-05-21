import { Router } from "express";
import { authenticateRoutes } from "modules/users/infra/http/routes/authenticate.routes";
import { userRoutes } from "modules/users/infra/http/routes/user.routes";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

// rotas não autenticadas
router.use("/auth", authenticateRoutes);

// rotas autenticadas
router.use(ensureAuthenticated);
router.use("/user", userRoutes);

export { router };
