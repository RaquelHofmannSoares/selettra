import { BaseEntity } from "shared/infra/typeorm/entities/BaseEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Setores" })
class Department extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: number;
}

export { Department };
