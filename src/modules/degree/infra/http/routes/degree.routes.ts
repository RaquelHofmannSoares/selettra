import { Router } from "express";
import { CreateDegreeController } from "modules/degree/services/createDegree/CreateDegreeController";
import { ListDegreetController } from "modules/degree/services/listDegree/ListDegreeController";

const createDegreeController = new CreateDegreeController();
const listDegreeController = new ListDegreetController();

const degreeRoutes = Router();

degreeRoutes.post("/", createDegreeController.handle);
degreeRoutes.get("/", listDegreeController.handle);

export { degreeRoutes };
