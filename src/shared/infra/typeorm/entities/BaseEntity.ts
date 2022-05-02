import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from "typeorm";

class BaseEntity {
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    createdBy: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    updatedBy: string;

    @VersionColumn()
    version: number;
}
export { BaseEntity };
