import { Router } from "express";
import { CreateDepartmentController } from "modules/department/services/createDepartment/CreateDepartmentController";
import { ListDepartmentController } from "modules/department/services/listDepartment/ListDepartmentController";

const createDepartmentController = new CreateDepartmentController();
const listDepartmentController = new ListDepartmentController();

const departmentRoutes = Router();

departmentRoutes.post("/", createDepartmentController.handle);
departmentRoutes.get("/", listDepartmentController.handle);

export { departmentRoutes };
