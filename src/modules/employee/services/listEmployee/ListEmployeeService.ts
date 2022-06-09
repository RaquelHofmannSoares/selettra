import { Employee } from "modules/employee/infra/typeorm/entities/Employee";
import { EmployeeRepository } from "modules/employee/infra/typeorm/repositories/EmployeeRepository";

class ListEmployeeService {
    private employeeRepository: EmployeeRepository;

    constructor() {
        this.employeeRepository = new EmployeeRepository();
    }

    async execute(): Promise<Employee[]> {
        const Employees = await this.employeeRepository.list();

        return Employees;
    }
}
export { ListEmployeeService };
