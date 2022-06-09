import { ICreateRoleDTO } from "modules/role/dtos/ICreateRoleDTO";
import { getRepository, Repository } from "typeorm";

import { Role } from "../entities/Role";

class RoleRepository {
    private repository: Repository<Role>;

    constructor() {
        this.repository = getRepository(Role);
    }

    async create({
        name,
        status,
        createdBy,
        updatedBy,
    }: ICreateRoleDTO): Promise<Role> {
        const role = this.repository.create({
            name,
            status,
            createdBy,
            updatedBy,
        });

        await this.repository.save(role);

        return role;
    }

    async list(): Promise<Role[]> {
        const roles = await this.repository.find();

        return roles;
    }

    async findByName(name: string): Promise<Role> {
        const role = await this.repository.findOne({ name });

        return role;
    }

    async findById(id: number): Promise<Role> {
        const role = await this.repository.findOne({ id });

        return role;
    }
}
export { RoleRepository };
