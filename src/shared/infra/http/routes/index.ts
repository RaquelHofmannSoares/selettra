import { Router } from "express";
import { authenticateRoutes } from "modules/users/infra/http/routes/authenticate.routes";
import { userRoutes } from "modules/users/infra/http/routes/user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authenticateRoutes);

export { router };
