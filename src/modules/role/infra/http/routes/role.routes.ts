import { Router } from "express";
import { CreateRoleController } from "modules/role/services/createRole/CreateRoleController";

const createRoleController = new CreateRoleController();

const roleRoutes = Router();

roleRoutes.post("/", createRoleController.handle);

export { roleRoutes };
