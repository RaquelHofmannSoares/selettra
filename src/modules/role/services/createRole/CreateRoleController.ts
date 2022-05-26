import { Request, Response } from "express";
import { RoleStatus } from "modules/role/enums/RoleStatus";

import { CreateRoleService } from "./CreateRoleService";

class CreateRoleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const { username } = request.user;

        const createRoleService = new CreateRoleService();

        const role = await createRoleService.execute({
            name,
            status: RoleStatus.ACTIVE,
            createdBy: username,
            updatedBy: username,
        });

        return response.status(201).json(role);
    }
}
export { CreateRoleController };
