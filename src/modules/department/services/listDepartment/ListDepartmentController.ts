import { Request, Response } from "express";

import { ListDepartmentService } from "./ListDepartmentService";

class ListDepartmentController {
    async handle(_: Request, response: Response): Promise<Response> {
        const listDepartmentService = new ListDepartmentService();

        const departments = await listDepartmentService.execute();

        return response.status(201).json(departments);
    }
}
export { ListDepartmentController };
