import { ICreateDegreeDTO } from "modules/degree/dtos/ICreateDegreeDTO";
import { Degree } from "modules/degree/infra/typeorm/entities/Degree";
import { DegreeRepository } from "modules/degree/infra/typeorm/repositories/DegreeRepository";
import { createDegreeSchema } from "modules/degree/schemas/degreeSchemas";
import { EmployeeRepository } from "modules/employee/infra/typeorm/repositories/EmployeeRepository";
import { AppError } from "shared/errors/AppError";

class CreateDegreeService {
    private degreeRepository: DegreeRepository;
    private employeeRepository: EmployeeRepository;

    constructor() {
        this.degreeRepository = new DegreeRepository();
        this.employeeRepository = new EmployeeRepository();
    }

    async execute({
        matricula,
        description,
        finishedAt,
        createdBy,
        updatedBy,
    }: ICreateDegreeDTO): Promise<Degree> {
        try {
            await createDegreeSchema.validate({
                matricula,
                description,
                finishedAt,
            });
        } catch (err) {
            const error = err.errors[0];

            throw new AppError(error, 422);
        }

        const employee = await this.employeeRepository.findByMatricula(
            matricula
        );

        if (!employee) {
            throw new AppError("Matrícula não encontrada", 404);
        }

        const degree = this.degreeRepository.create({
            matricula,
            description,
            finishedAt,
            createdBy,
            updatedBy,
        });

        return degree;
    }
}
export { CreateDegreeService };
