import { Request, Response } from "express";

import { CreateEventService } from "./CreateEventService";

class CreateEventController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { matricula, type, description, value, oldValue, eventDate } =
            request.body;
        const { username } = request.user;

        const createEventService = new CreateEventService();

        const event = await createEventService.execute({
            matricula,
            type,
            description,
            value,
            oldValue,
            eventDate,
            createdBy: username,
            updatedBy: username,
        });

        return response.status(201).json(event);
    }
}
export { CreateEventController };
