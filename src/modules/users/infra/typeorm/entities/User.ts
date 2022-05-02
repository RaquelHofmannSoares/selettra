import { BaseEntity } from "shared/infra/typeorm/entities/BaseEntity";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "Users" })
class User extends BaseEntity {
    constructor() {
        super();
    }

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    status: number;
}

export { User };
