import { request } from "express";
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
        const roles = this.repository.find();

        return roles;
    }
    async findByName(name: string): Promise<Role> {
        const role = this.repository.findOne({ name });

        return role;
    }
}
export { RoleRepository };
