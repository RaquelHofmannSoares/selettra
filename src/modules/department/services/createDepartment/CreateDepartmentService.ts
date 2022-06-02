import { ICreateDepartmentDTO } from "modules/department/dtos/ICreateDepartmentDTO";
import { Department } from "modules/department/infra/typeorm/entities/Department";
import { DepartmentRepository } from "modules/department/infra/typeorm/repositories/DepartmentRepository";
import { createDepartmentSchema } from "modules/department/schemas/departmentSchemas";
import { AppError } from "shared/errors/AppError";

class CreateDepartmentService {
    private departmentRepository: DepartmentRepository;

    constructor() {
        this.departmentRepository = new DepartmentRepository();
    }

    async execute({
        name,
        status,
        createdBy,
        updatedBy,
    }: ICreateDepartmentDTO): Promise<Department> {
        try {
            await createDepartmentSchema.validate({
                name,
            });
        } catch (err) {
            const error = err.errors[0];

            throw new AppError(error, 422);
        }

        const alreadyExistsDepartment =
            await this.departmentRepository.findByName(name);

        if (alreadyExistsDepartment) {
            throw new AppError("Setor já existente", 400);
        }

        const department = this.departmentRepository.create({
            name,
            status,
            createdBy,
            updatedBy,
        });

        return department;
    }
}
export { CreateDepartmentService };
