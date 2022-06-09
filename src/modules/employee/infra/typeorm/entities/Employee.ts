import { Department } from "modules/department/infra/typeorm/entities/Department";
import { Role } from "modules/role/infra/typeorm/entities/Role";
import { BaseEntity } from "shared/infra/typeorm/entities/BaseEntity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({ name: "Colaborador" })
class Employee extends BaseEntity {
    @PrimaryColumn()
    matricula: string;

    @Column()
    name: string;

    @Column()
    birthdate: Date;

    @Column()
    wage: number;

    @Column()
    cargoId: number;

    @Column()
    setorId: number;

    @Column()
    status: number;

    @ManyToOne(() => Role)
    @JoinColumn({ name: "cargoId" })
    cargo: Role;

    @ManyToOne(() => Department)
    @JoinColumn({ name: "setorId" })
    setor: Department;
}

export { Employee };
