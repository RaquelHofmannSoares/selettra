import { DepartmentRepository } from "modules/department/infra/typeorm/repositories/DepartmentRepository";
import { ICreateEmployeeDTO } from "modules/employee/dtos/ICreateEmployeeDTO";
import { Employee } from "modules/employee/infra/typeorm/entities/Employee";
import { EmployeeRepository } from "modules/employee/infra/typeorm/repositories/EmployeeRepository";
import { createEmployeeSchema } from "modules/employee/schemas/EmployeeSchemas";
import { RoleRepository } from "modules/role/infra/typeorm/repositories/RoleRepository";
import { AppError } from "shared/errors/AppError";

class CreateEmployeeService {
    private employeeRepository: EmployeeRepository;
    private roleRepository: RoleRepository;
    private departmentRepository: DepartmentRepository;

    constructor() {
        this.employeeRepository = new EmployeeRepository();
        this.departmentRepository = new DepartmentRepository();
        this.roleRepository = new RoleRepository();
    }

    async execute({
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
        try {
            await createEmployeeSchema.validate({
                matricula,
                name,
                birthdate,
                wage,
                cargoId,
                setorId,
                status,
            });
        } catch (err) {
            const error = err.errors[0];

            throw new AppError(error, 422);
        }

        const alreadyExistsEmployee =
            await this.employeeRepository.findByMatricula(matricula);

        if (alreadyExistsEmployee) {
            throw new AppError("Colaborador já existente", 400);
        }

        const existsRole = await this.roleRepository.findById(cargoId);

        if (!existsRole) {
            throw new AppError("Cargo inválido", 400);
        }

        const existsDepartment = await this.departmentRepository.findById(
            setorId
        );

        if (!existsDepartment) {
            throw new AppError("Setor inválido", 400);
        }

        const employee = await this.employeeRepository.create({
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

        return employee;
    }
}
export { CreateEmployeeService };
