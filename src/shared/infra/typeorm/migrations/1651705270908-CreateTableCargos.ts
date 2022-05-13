import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCargos1651705270908 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Cargos",
                columns: [
                    {
                        name: "id",
                        type: "numeric",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "4000",
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
        await queryRunner.dropTable("Cargos");
    }
}
