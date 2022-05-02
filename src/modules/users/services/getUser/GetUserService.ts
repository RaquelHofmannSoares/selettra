import { User } from "modules/users/infra/typeorm/entities/User";

import { UserRepository } from "../../infra/typeorm/repositories/UserRepository";

class GetUserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(): Promise<User[]> {
        const users = await this.userRepository.list();

        return users;
    }
}
export { GetUserService };
