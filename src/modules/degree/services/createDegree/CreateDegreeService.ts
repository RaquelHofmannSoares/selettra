
import { ICreateDegreeDTO } from "modules/degree/dtos/ICreateDegreeDTO";
import { Degree } from "modules/degree/infra/typeorm/entities/Degree";
import { DegreeRepository } from "modules/degree/infra/typeorm/repositories/DegreeRepository";
import { AppError } from "shared/errors/AppError";

class CreateDegreeService {
    private DegreeRepository: DegreeRepository;

    constructor() {
        this.DegreeRepository = new DegreeRepository();
    }

    async execute({
        matricula,
        description,
        finishedAt,
        status,
        createdBy,
        updatedBy,
    }: ICreateDegreeDTO): Promise<Degree> {
        const alreadyExistsDegree =
            await this.DegreeRepository.findByMatricula(matricula);

        if (!alreadyExistsDegree) {
            throw new AppError("Matrícula inválida", 400);
        }

        const degree = this.DegreeRepository.create({
            matricula,
             description,
            finishedAt,
            status,
            createdBy,
            updatedBy,
        });

        return degree;
    }
}
export { CreateDegreeService };
