import { Request, Response } from "express";

import { RefreshUserTokenService } from "./RefreshUserTokenService";

class RefreshUserTokenController {
    async handle(request: Request, response: Response): Promise<Response> {
        const token =
            request.body.token ||
            request.headers["x-access-token"] ||
            request.query.token;

        const refreshTokenService = new RefreshUserTokenService();

        const newToken = await refreshTokenService.execute(token);

        return response.status(200).json(newToken);
    }
}
export { RefreshUserTokenController };
