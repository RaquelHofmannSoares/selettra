import { Event } from "modules/event/infra/typeorm/entities/Event";
import { EventRepository } from "modules/event/infra/typeorm/repositories/EventRepository";

class ListEventService {
    private eventRepository: EventRepository;

    constructor() {
        this.eventRepository = new EventRepository();
    }

    async execute(): Promise<Event[]> {
        const events = await this.eventRepository.list();

        return events;
    }
}
export { ListEventService };
