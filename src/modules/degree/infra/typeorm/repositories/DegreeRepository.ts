
import { ICreateDegreeDTO } from "modules/degree/dtos/ICreateDegreeDTO";
import { getRepository, Repository } from "typeorm";

import { Degree } from "../entities/Degree";

class DegreeRepository {
    private repository: Repository<Degree>;

    constructor() {
        this.repository = getRepository(Degree);
    }

    async create({
        matricula,
        description,
        finishedAt,
        status,
        createdBy,
        updatedBy,
    }: ICreateDegreeDTO): Promise<Degree> {
        const degree = this.repository.create({
            matricula,
            description,
            finishedAt,
            status,
            createdBy,
            updatedBy,
        });

        await this.repository.save(degree);

        return degree;
    }

    async list(): Promise<Degree[]> {
        const degrees = this.repository.find();

        return degrees;
    }

    async findByMatricula(matricula: string): Promise<Degree> {
        const degree = this.repository.findOne({ matricula });

        return degree;
    }

    async findById(id: number): Promise<Degree> {
        const degree = this.repository.findOne({ id });

        return degree;
    }
}
export { DegreeRepository };
