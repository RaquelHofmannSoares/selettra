import { Request, Response } from "express";

import { CreateEmployeeService } from "./CreateEmployeeService";

class CreateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { matricula, name, birthdate, wage, cargoId, setorId, status } =
            request.body;
        const { username } = request.user;

        const createEmployeeService = new CreateEmployeeService();

        const employee = await createEmployeeService.execute({
            matricula,
            name,
            birthdate,
            wage,
            cargoId,
            setorId,
            status,
            createdBy: username,
            updatedBy: username,
        });

        return response.status(201).json(employee);
    }
}
export { CreateEmployeeController };
