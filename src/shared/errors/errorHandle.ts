import { NextFunction, Request, Response } from "express";

import { AppError } from "./AppError";

function errorHandle(
    error: Error,
    _request: Request,
    response: Response,
    next: NextFunction
): Response {
    if (error instanceof AppError) {
        return response
            .status(error.statusCode)
            .json(error.getResponseMessage());
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error",
        error: error.message,
    });
}
export { errorHandle };
