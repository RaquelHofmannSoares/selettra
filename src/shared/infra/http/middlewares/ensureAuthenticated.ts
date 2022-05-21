import { auth } from "config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "modules/users/infra/typeorm/repositories/UserRepository";
import { AppError } from "shared/errors/AppError";

interface IPayload {
    sub: string;
}

async function ensureAuthenticated(
    request: Request,
    _response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;
    const userRepository = new UserRepository();

    if (!authHeader) {
        throw new AppError("Missing token", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: username } = verify(token, auth.secretToken) as IPayload;

        const user = await userRepository.findByUsername(username);

        if (!user) {
            throw new AppError("Invalid token", 401);
        }

        request.user = { username };

        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
}

export { ensureAuthenticated };
