import { ICreateEventDTO } from "modules/event/dtos/ICreateEventDTO";
import { getRepository, Repository } from "typeorm";

import { Event } from "../entities/Event";

class EventRepository {
    private repository: Repository<Event>;

    constructor() {
        this.repository = getRepository(Event);
    }

    async create({
        matricula,
        type,
        description,
        value,
        oldValue,
        eventDate,
        createdBy,
        updatedBy,
    }: ICreateEventDTO): Promise<Event> {
        const event = this.repository.create({
            matricula,
            type,
            description,
            value,
            oldValue,
            eventDate,
            createdBy,
            updatedBy,
        });

        await this.repository.save(event);

        return event;
    }

    async list(): Promise<Event[]> {
        const events = this.repository.find();

        return events;
    }

    async findByMatricula(matricula: string): Promise<Event[]> {
        const events = this.repository.find({ matricula });

        return events;
    }

    async findById(id: number): Promise<Event> {
        const event = this.repository.findOne({ id });

        return event;
    }
}
export { EventRepository };
