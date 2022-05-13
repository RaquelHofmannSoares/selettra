import { Request, Response } from "express";

import { AuthenticateUserService } from "./AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;
        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            username,
            password,
        });

        return response.status(200).json(token);
    }
}
export { AuthenticateUserController };
