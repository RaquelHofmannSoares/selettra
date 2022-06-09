import { Request, Response } from "express";
import { DegreeStatus } from "modules/degree/enums/DegreeStatus";
import { CreateDegreeService } from "./CreateDegreeService";

class CreateDegreeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { matricula, description, finishedAt, createdBy, updatedBy } = request.body;
  
        const createDegreeService = new CreateDegreeService();

        const degree = await createDegreeService.execute({
            matricula,
            description,
            finishedAt,
            status: DegreeStatus.ACTIVE,
            createdBy,
            updatedBy,
        });

        return response.status(201).json(degree);
    }
}
export { CreateDegreeController };
