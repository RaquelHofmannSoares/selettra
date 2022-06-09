
import { ICreateDegreeDTO } from "modules/degree/dtos/ICreateDegreeDTO";
import { Degree } from "modules/degree/infra/typeorm/entities/Degree";
import { DegreeRepository } from "modules/degree/infra/typeorm/repositories/DegreeRepository";
import { createDegreeSchema } from "modules/degree/schemas/degreeSchemas";
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
        // try {
        //     await createDegreeSchema.validate({
        //         name: 'teste',
        //         description: 'sua mãe aquela gostosatendinga',
        //     });
        // } catch (err) {
        //     const error = err.errors[0];

        //     throw new AppError(error, 422);
        // }

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
