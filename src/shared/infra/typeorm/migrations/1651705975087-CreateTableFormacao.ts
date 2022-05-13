import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableFormacao1651705975087 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Formacao",
                columns: [
                    {
                        name: "id",
                        type: "numeric",
                        isPrimary: true,
                    },
                    {
                        name: "colaboradorId",
                        type: "numeric",
                        isNullable: false,
                    },
                    {
                        name: "curso",
                        type: "varchar",
                        length: "4000",
                        isNullable: false,
                    },
                    {
                        name: "situacao",
                        type: "numeric",
                        isNullable: false,
                    },
                    {
                        name: "dataConclusao",
                        type: "date",
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
        await queryRunner.dropTable("Formacao");
    }
}
