import { Department } from "modules/department/infra/typeorm/entities/Department";
import { DepartmentRepository } from "modules/department/infra/typeorm/repositories/DepartmentRepository";

class ListDepartmentService {
    private departmentRepository: DepartmentRepository;

    constructor() {
        this.departmentRepository = new DepartmentRepository();
    }

    async execute(): Promise<Department[]> {
        const departments = await this.departmentRepository.list();

        return departments;
    }
}
export { ListDepartmentService };
