type AppErrorResponse = {
    message: string;
};

class AppError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype);
        this.statusCode = statusCode;
    }

    public getResponseMessage(): AppErrorResponse {
        return { message: this.message };
    }
}
export { AppError };
