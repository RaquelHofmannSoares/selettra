import { Router } from "express";
import { CreateEmployeeController } from "modules/employee/services/createEmployee/CreateEmployeeController";
import { ListEmployeeController } from "modules/employee/services/listEmployee/ListEmployeeController";

const createEmployeeController = new CreateEmployeeController();
const listEmployeeController = new ListEmployeeController();

const employeeRoutes = Router();

employeeRoutes.post("/", createEmployeeController.handle);
employeeRoutes.get("/", listEmployeeController.handle);

export { employeeRoutes };
