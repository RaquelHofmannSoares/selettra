import { Degree } from "modules/degree/infra/typeorm/entities/Degree";
import { DegreeRepository } from "modules/degree/infra/typeorm/repositories/DegreeRepository";


class ListDegreeService {
    private degreeRepository: DegreeRepository;

    constructor() {
        this.degreeRepository = new DegreeRepository();
    }

    async execute(): Promise<Degree[]> {
        const degrees = await this.degreeRepository.list();

        return degrees;
    }
}
export { ListDegreeService };
