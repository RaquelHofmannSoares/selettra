import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1651430840384 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns: [
                    {
                        name: "username",
                        type: "varchar",
                        length: "50",
                        isPrimary: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "1000",
                        isNullable: false,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type: "numeric",
                        isNullable: false,
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "createdBy",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "updatedBy",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "version",
                        type: "numeric",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users");
    }
}
