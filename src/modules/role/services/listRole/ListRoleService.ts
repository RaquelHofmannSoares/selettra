import { Role } from "modules/role/infra/typeorm/entities/Role";
import { RoleRepository } from "modules/role/infra/typeorm/repositories/RoleRepository";

class ListRoleService {
    private roleRepository: RoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async execute(): Promise<Role[]> {
        const roles = await this.roleRepository.list();

        return roles;
    }
}
export { ListRoleService };
