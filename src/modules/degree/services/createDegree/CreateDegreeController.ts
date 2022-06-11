import { Request, Response } from "express";

import { CreateDegreeService } from "./CreateDegreeService";

class CreateDegreeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { matricula, description, finishedAt } = request.body;
        const { username } = request.user;

        const createDegreeService = new CreateDegreeService();

        const degree = await createDegreeService.execute({
            matricula,
            description,
            finishedAt,
            createdBy: username,
            updatedBy: username,
        });

        return response.status(201).json(degree);
    }
}
export { CreateDegreeController };
