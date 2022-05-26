import { Request, Response } from "express";
import { UserStatus } from "modules/users/enums/UserStatus";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password, name } = request.body;
        const { username: subject } = request.user;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            username,
            password,
            name,
            status: UserStatus.ACTIVE,
            createdBy: subject,
            updatedBy: subject,
        });

        delete user.password;

        return response.status(201).json(user);
    }
}
export { CreateUserController };
