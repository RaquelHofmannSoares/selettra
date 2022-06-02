import { request } from "express";
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
        const Department = this.repository.create({
            name,
            status,
            createdBy,
            updatedBy,
        });

        await this.repository.save(Department);

        return Department;
    }

    async list(): Promise<Department[]> {
        const Departments = this.repository.find();

        return Departments;
    }
    async findByName(name: string): Promise<Department> {
        const Department = this.repository.findOne({ name });

        return Department;
    }
}
export { DepartmentRepository };
