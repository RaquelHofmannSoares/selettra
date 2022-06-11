import { EmployeeRepository } from "modules/employee/infra/typeorm/repositories/EmployeeRepository";
import { ICreateEventDTO } from "modules/event/dtos/ICreateEventDTO";
import { EventTypes } from "modules/event/enums/EventTypes";
import { Event } from "modules/event/infra/typeorm/entities/Event";
import { EventRepository } from "modules/event/infra/typeorm/repositories/EventRepository";
import { createEventSchema } from "modules/event/schemas/eventSchemas";
import { AppError } from "shared/errors/AppError";

class CreateEventService {
    private eventRepository: EventRepository;
    private employeeRepository: EmployeeRepository;

    constructor() {
        this.eventRepository = new EventRepository();
        this.employeeRepository = new EmployeeRepository();
    }

    async execute({
        matricula,
        type,
        description,
        value,
        oldValue,
        eventDate,
        createdBy,
        updatedBy,
    }: ICreateEventDTO): Promise<Event> {
        try {
            await createEventSchema.validate({
                matricula,
                type,
                description,
                value,
                oldValue,
                eventDate,
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

        if (!(type in EventTypes)) {
            throw new AppError("Tipo de evento inválido", 400);
        }

        const event = await this.eventRepository.create({
            matricula,
            type,
            description,
            value,
            oldValue,
            eventDate,
            createdBy,
            updatedBy,
        });

        return event;
    }
}
export { CreateEventService };
