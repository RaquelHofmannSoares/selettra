import { ICreateDepartmentDTO } from "modules/department/dtos/ICreateDepartmentDTO";
import { getRepository, Repository } from "typeorm";

import { Department } from "../entities/Department";

class DepartmentRepository {
    private repository: Repository<Department>;

    constructor() {
        this.repository = getRepository(Department);
    }

    async create({
        name,
        status,
        createdBy,
        updatedBy,
    }: ICreateDepartmentDTO): Promise<Department> {
        const department = this.repository.create({
            name,
            status,
            createdBy,
            updatedBy,
        });

        await this.repository.save(department);

        return department;
    }

    async list(): Promise<Department[]> {
        const departments = this.repository.find();

        return departments;
    }

    async findByName(name: string): Promise<Department> {
        const department = this.repository.findOne({ name });

        return department;
    }

    async findById(id: number): Promise<Department> {
        const department = this.repository.findOne({ id });

        return department;
    }
}
export { DepartmentRepository };
