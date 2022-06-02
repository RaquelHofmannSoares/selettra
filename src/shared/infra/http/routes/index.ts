import { Router } from "express";
import { departmentRoutes } from "modules/department/infra/http/routes/department.routes";
import { roleRoutes } from "modules/role/infra/http/routes/role.routes";
import { authenticateRoutes } from "modules/users/infra/http/routes/authenticate.routes";
import { userRoutes } from "modules/users/infra/http/routes/user.routes";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

// rotas não autenticadas
router.use("/auth", authenticateRoutes);

// rotas autenticadas
router.use(ensureAuthenticated);
router.use("/user", userRoutes);
router.use("/role", roleRoutes);
router.use("/department", departmentRoutes);

export { router };
