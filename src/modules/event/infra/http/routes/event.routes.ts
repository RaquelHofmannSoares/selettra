import { Router } from "express";
import { CreateEventController } from "modules/event/services/createEvent/CreateEventController";
import { ListEventtController } from "modules/event/services/listEvent/ListEventController";

const createEventController = new CreateEventController();
const listEventController = new ListEventtController();

const eventRoutes = Router();

eventRoutes.post("/", createEventController.handle);
eventRoutes.get("/", listEventController.handle);

export { eventRoutes };
