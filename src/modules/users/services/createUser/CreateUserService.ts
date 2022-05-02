import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { User } from "modules/users/infra/typeorm/entities/User";

import { UserRepository } from "../../infra/typeorm/repositories/UserRepository";

class CreateUserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute({
        username,
        password,
        name,
        status,
        createdBy,
        updatedBy,
    }: ICreateUserDTO): Promise<User> {
        const user = await this.userRepository.create({
            username,
            password,
            name,
            status,
            createdBy,
            updatedBy,
        });
        return user;
    }
}
export { CreateUserService };
