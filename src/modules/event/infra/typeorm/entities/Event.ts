import { Employee } from "modules/employee/infra/typeorm/entities/Employee";
import { BaseEntity } from "shared/infra/typeorm/entities/BaseEntity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "Eventos" })
class Event extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    matricula: string;

    @Column()
    type: number;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    oldValue: number;

    @Column()
    eventDate: Date;

    @ManyToOne(() => Event)
    @JoinColumn({ name: "matricula" })
    employee: Employee;
}

export { Event };
