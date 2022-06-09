import { Router } from "express";
import { CreateDegreeController } from "modules/degree/services/createDegree/CreateDegreeController";


const createDegreeController = new CreateDegreeController();


const degreeRoutes = Router();

degreeRoutes.post("/", createDegreeController.handle);


export { degreeRoutes };
