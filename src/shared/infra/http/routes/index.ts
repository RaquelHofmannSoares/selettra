import { Router } from "express";
import { userRoutes } from "modules/users/infra/http/routes/user.routes";

const router = Router();

router.use("/user", userRoutes);

export { router };
