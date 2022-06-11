import { Employee } from "modules/employee/infra/typeorm/entities/Employee";
import { BaseEntity } from "shared/infra/typeorm/entities/BaseEntity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "Formacao" })
class Degree extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    matricula: string;

    @Column()
    description: string;

    @Column()
    finishedAt: Date;

    @ManyToOne(() => Employee)
    @JoinColumn({ name: "matricula" })
    employee: Employee;
}

export { Degree };
