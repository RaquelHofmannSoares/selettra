import { Router } from "express";
import { CreateRoleController } from "modules/role/services/createRole/CreateRoleController";
import { ListRoleController } from "modules/role/services/listRole/ListRoleController";

const createRoleController = new CreateRoleController();
const listRoleController = new ListRoleController();

const roleRoutes = Router();

roleRoutes.post("/", createRoleController.handle);
roleRoutes.get("/", listRoleController.handle);

export { roleRoutes };
