import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        username,
        password,
        name,
        status,
        createdBy,
        updatedBy,
    }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            username,
            password,
            name,
            status,
            createdBy,
            updatedBy,
        });

        await this.repository.save(user);

        return user;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();

        return users;
    }
}
export { UserRepository };
