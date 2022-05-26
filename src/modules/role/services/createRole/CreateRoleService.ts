import { ICreateRoleDTO } from "modules/role/dtos/ICreateRoleDTO";
import { Role } from "modules/role/infra/typeorm/entities/Role";
import { RoleRepository } from "modules/role/infra/typeorm/repositories/RoleRepository";
import { createRoleSchema } from "modules/role/schemas/roleSchemas";
import { AppError } from "shared/errors/AppError";

class CreateRoleService {
    private roleRepository: RoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async execute({
        name,
        status,
        createdBy,
        updatedBy,
    }: ICreateRoleDTO): Promise<Role> {
        try {
            await createRoleSchema.validate({
                name,
            });
        } catch (err) {
            const error = err.errors[0];

            throw new AppError(error, 422);
        }

        const alreadyExistsRole = await this.roleRepository.findByName(name);

        if (alreadyExistsRole) {
            throw new AppError("Cargo já existente", 400);
        }

        const role = this.roleRepository.create({
            name,
            status,
            createdBy,
            updatedBy,
        });

        return role;
    }
}
export { CreateRoleService };
