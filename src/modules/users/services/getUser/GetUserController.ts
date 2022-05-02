import { Request, Response } from "express";

import { GetUserService } from "./GetUserService";

class GetUserController {
    async handle(_: Request, response: Response): Promise<Response> {
        const getUserService = new GetUserService();

        const users = await getUserService.execute();

        users.forEach((user) => {
            delete user.password;
        });

        return response.status(201).json(users);
    }
}
export { GetUserController };
