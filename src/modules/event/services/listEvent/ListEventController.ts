import { Request, Response } from "express";

import { ListEventService } from "./ListEventService";

class ListEventtController {
    async handle(_: Request, response: Response): Promise<Response> {
        const listEventsService = new ListEventService();

        const events = await listEventsService.execute();

        return response.status(201).json(events);
    }
}
export { ListEventtController };
