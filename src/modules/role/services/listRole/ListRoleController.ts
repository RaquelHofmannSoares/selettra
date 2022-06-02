import { Request, Response } from "express";

import { ListRoleService } from "./ListRoleService";

class ListRoleController {
    async handle(_: Request, response: Response): Promise<Response> {
        const listRoleService = new ListRoleService();

        const roles = await listRoleService.execute();

        return response.status(201).json(roles);
    }
}
export { ListRoleController };
