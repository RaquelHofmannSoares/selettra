import { Request, Response } from "express";

import { ListEmployeeService } from "./ListEmployeeService";

class ListEmployeeController {
    async handle(_: Request, response: Response): Promise<Response> {
        const listEmployeeService = new ListEmployeeService();

        const employees = await listEmployeeService.execute();

        return response.status(201).json(employees);
    }
}
export { ListEmployeeController };
