import { Request, Response } from "express";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password, name, status } = request.body;
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            username,
            password,
            name,
            status,
            createdBy: "Admin",
            updatedBy: "Admin",
        });

        delete user.password;

        return response.status(201).json(user);
    }
}
export { CreateUserController };
