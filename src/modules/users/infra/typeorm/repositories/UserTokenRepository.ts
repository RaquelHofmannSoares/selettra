import { ICreateUserTokenDTO } from "modules/users/dtos/ICreateUserTokenDTO";
import { getRepository, Repository } from "typeorm";
import { string } from "yup";

import { UserToken } from "../entities/UserToken";

class UserTokenRepository {
    private repository: Repository<UserToken>;

    constructor() {
        this.repository = getRepository(UserToken);
    }

    async create({
        username,
        refreshToken,
        expiresDate,
        createdBy,
        updatedBy,
    }: ICreateUserTokenDTO): Promise<UserToken> {
        const userToken = this.repository.create({
            username,
            refreshToken,
            expiresDate,
            createdBy,
            updatedBy,
        });

        await this.repository.save(userToken);

        return userToken;
    }

    async findByUsernameAndRefreshToken(
        username: string,
        refreshToken: string
    ): Promise<UserToken> {
        const userToken = await this.repository.findOne({
            username,
            refreshToken,
        });

        return userToken;
    }

    async deleteTokenById(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findByRefreshToken(refreshToken: string): Promise<UserToken> {
        const userToken = await this.repository.findOne({ refreshToken });

        return userToken;
    }
}

export { UserTokenRepository };
