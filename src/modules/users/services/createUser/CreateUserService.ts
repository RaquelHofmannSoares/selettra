import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { User } from "modules/users/infra/typeorm/entities/User";
import { HashProvider } from "modules/users/providers/HashProvider/HashProvider";
import { createUserSchema } from "modules/users/schemas/userSchema";
import { AppError } from "shared/errors/AppError";

import { UserRepository } from "../../infra/typeorm/repositories/UserRepository";

class CreateUserService {
    private userRepository: UserRepository;
    private hashProvider: HashProvider;

    constructor() {
        this.userRepository = new UserRepository();
        this.hashProvider = new HashProvider();
    }

    async execute({
        username,
        password,
        name,
        status,
        createdBy,
        updatedBy,
    }: ICreateUserDTO): Promise<User> {
        try {
            await createUserSchema.validate({
                username,
                password,
                name,
            });
        } catch (err) {
            const error = err.errors[0];

            throw new AppError(error, 422);
        }

        const usernameAlreadyInUse = await this.userRepository.findByUsername(
            username
        );

        if (usernameAlreadyInUse) {
            throw new AppError("Login já está em uso", 400);
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.userRepository.create({
            username,
            password: hashedPassword,
            name,
            status,
            createdBy,
            updatedBy,
        });
        return user;
    }
}
export { CreateUserService };
