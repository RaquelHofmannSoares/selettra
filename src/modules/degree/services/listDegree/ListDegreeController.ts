import { Request, Response } from "express";
import { ListDegreeService } from "./ListDegreeService";



class ListDegreetController {
    async handle(_: Request, response: Response): Promise<Response> {
        const listDegreesService = new ListDegreeService();

        const degrees = await listDegreesService.execute();

        return response.status(201).json(degrees);
    }
}
export { ListDegreetController };
