import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateTableEventos1654907100295 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Eventos",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "matricula",
                        type: "varchar",
                        length: "4000",
                        isNullable: false,
                    },
                    {
                        name: "type",
                        type: "numeric",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "4000",
                        isNullable: false,
                    },
                    {
                        name: "value",
                        type: "varchar",
                        length: "4000",
                        isNullable: true,
                    },
                    {
                        name: "oldValue",
                        type: "varchar",
                        length: "4000",
                        isNullable: true,
                    },
                    {
                        name: "eventDate",
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

        await queryRunner.createForeignKey(
            "Eventos",
            new TableForeignKey({
                name: "FK_Eventos_Colaborador",
                columnNames: ["matricula"],
                referencedColumnNames: ["matricula"],
                referencedTableName: "Colaborador",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Eventos");
    }
}
