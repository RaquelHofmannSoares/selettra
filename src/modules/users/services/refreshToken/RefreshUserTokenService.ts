import { auth } from "config/auth";
import { sign, verify } from "jsonwebtoken";
import { UserTokenRepository } from "modules/users/infra/typeorm/repositories/UserTokenRepository";
import { AppError } from "shared/errors/AppError";
import { DateProvider } from "shared/providers/DateProvider/DateProvider";

interface IPayload {
    sub: string;
}

interface IResponse {
    token: string;
    refreshToken: string;
}

class RefreshUserTokenService {
    private userTokenRepository: UserTokenRepository;
    private dateProvider: DateProvider;

    constructor() {
        this.userTokenRepository = new UserTokenRepository();
        this.dateProvider = new DateProvider();
    }

    async execute(refreshToken: string): Promise<IResponse> {
        const {
            secretToken,
            expiresInToken,
            secretRefreshToken,
            expiresInRefreshToken,
            expiresInRefreshTokenInDays,
        } = auth;

        try {
            const { sub } = verify(
                refreshToken,
                secretRefreshToken
            ) as IPayload;

            const username = sub;

            const userToken =
                await this.userTokenRepository.findByUsernameAndRefreshToken(
                    username,
                    refreshToken
                );

            if (!userToken) {
                throw new AppError("Invalid refresh token", 400);
            }

            await this.userTokenRepository.deleteTokenById(userToken.id);

            const token = sign({}, secretToken, {
                subject: username,
                expiresIn: expiresInToken,
            });

            const newRefreshToken = sign({}, secretRefreshToken, {
                subject: username,
                expiresIn: expiresInRefreshToken,
            });

            const expiresDate = this.dateProvider.addDays(
                expiresInRefreshTokenInDays
            );

            await this.userTokenRepository.create({
                username,
                refreshToken: newRefreshToken,
                expiresDate,
                createdBy: username,
                updatedBy: username,
            });

            return { token, refreshToken: newRefreshToken };
        } catch {
            throw new AppError("Invalid refresh token", 400);
        }
    }
}
export { RefreshUserTokenService };
