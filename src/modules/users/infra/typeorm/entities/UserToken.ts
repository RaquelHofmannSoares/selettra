import { BaseEntity } from "shared/infra/typeorm/entities/BaseEntity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity({ name: "UserToken" })
class UserToken extends BaseEntity {
    constructor() {
        super();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    refreshToken: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "username" })
    user: User;

    @Column()
    username: string;

    @Column()
    expiresDate: Date;
}

export { UserToken };
