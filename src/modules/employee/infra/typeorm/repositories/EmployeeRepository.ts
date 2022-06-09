import { ICreateEmployeeDTO } from "modules/employee/dtos/ICreateEmployeeDTO";
import { getRepository, Repository } from "typeorm";

import { Employee } from "../entities/Employee";

class EmployeeRepository {
    private repository: Repository<Employee>;

    constructor() {
        this.repository = getRepository(Employee);
    }

    async create({
        matricula,
        name,
        birthdate,
        wage,
        cargoId,
        setorId,
        status,
        createdBy,
        updatedBy,
    }: ICreateEmployeeDTO): Promise<Employee> {
        const employee = this.repository.create({
            matricula,
            name,
            birthdate,
            wage,
            cargoId,
            setorId,
            status,
            createdBy,
            updatedBy,
        });

        await this.repository.save(employee);

        return employee;
    }

    async list(): Promise<Employee[]> {
        const employees = this.repository.find();

        return employees;
    }

    async findByMatricula(matricula: string): Promise<Employee> {
        const employee = this.repository.findOne({ matricula });

        return employee;
    }
}
export { EmployeeRepository };
