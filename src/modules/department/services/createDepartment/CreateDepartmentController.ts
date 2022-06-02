import { Request, Response } from "express";
import { DepartmentStatus } from "modules/department/enums/DepartmentStatus";

import { CreateDepartmentService } from "./CreateDepartmentService";

class CreateDepartmentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const { username } = request.user;

        const createDepartmentService = new CreateDepartmentService();

        const department = await createDepartmentService.execute({
            name,
            status: DepartmentStatus.ACTIVE,
            createdBy: username,
            updatedBy: username,
        });

        return response.status(201).json(department);
    }
}
export { CreateDepartmentController };
