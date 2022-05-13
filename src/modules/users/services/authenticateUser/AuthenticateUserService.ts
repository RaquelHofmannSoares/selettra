import { auth } from "config/auth";
import { sign } from "jsonwebtoken";
import { UserStatus } from "modules/users/enums/UserStatus";
import { UserRepository } from "modules/users/infra/typeorm/repositories/UserRepository";
import { UserTokenRepository } from "modules/users/infra/typeorm/repositories/UserTokenRepository";
import { HashProvider } from "modules/users/providers/HashProvider/HashProvider";
import { AppError } from "shared/errors/AppError";
import { DateProvider } from "shared/providers/DateProvider/DateProvider";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    token: string;
    refreshToken: string;
}

class AuthenticateUserService {
    private userRepository: UserRepository;
    private userTokenRepository: UserTokenRepository;
    private hashProvider: HashProvider;
    private dateProvider: DateProvider;

    constructor() {
        this.userRepository = new UserRepository();
        this.userTokenRepository = new UserTokenRepository();
        this.hashProvider = new HashProvider();
        this.dateProvider = new DateProvider();
    }

    async execute({ username, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByUsername(username);

        if (!user) {
            throw new AppError("Credenciais inválidas", 401);
        }

        const passwordMatch = await this.hashProvider.compareHash(
            password,
            user.password
        );

        if (!passwordMatch) {
            throw new AppError("Credenciais inválidas", 401);
        }

        if (user.status === UserStatus.INACTIVE) {
            throw new AppError("Usuário inativo", 400);
        }

        const {
            secretToken,
            secretRefreshToken,
            expiresInToken,
            expiresInRefreshTokenInDays,
            expiresInRefreshToken,
        } = auth;

        const token = sign({}, secretToken, {
            subject: username,
            expiresIn: expiresInToken,
        });

        const refreshToken = sign({}, secretRefreshToken, {
            subject: username,
            expiresIn: expiresInRefreshToken,
        });

        const refreshTokenExpiresDate = this.dateProvider.addDays(
            expiresInRefreshTokenInDays
        );

        await this.userTokenRepository.create({
            username,
            refreshToken,
            expiresDate: refreshTokenExpiresDate,
            createdBy: username,
            updatedBy: username,
        });

        console.log({ message: "ok" });
        return {
            token,
            refreshToken,
        };
    }
}

export { AuthenticateUserService };
