import { Employee } from "modules/employee/infra/typeorm/entities/Employee";
import { BaseEntity } from "shared/infra/typeorm/entities/BaseEntity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Setores" })
class Department extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: number;

    @OneToMany(() => Employee, (employee) => employee.setor)
    employees: Employee[];
}

export { Department };
