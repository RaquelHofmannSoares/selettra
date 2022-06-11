import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateTableFormacao1654779811622 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Formacao",
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
                        name: "description",
                        type: "varchar",
                        length: "4000",
                        isNullable: false,
                    },
                    {
                        name: "finishedAt",
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
            "Formacao",
            new TableForeignKey({
                name: "FK_Formacao_Colaborador",
                columnNames: ["matricula"],
                referencedColumnNames: ["matricula"],
                referencedTableName: "Colaborador",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Formacao");
    }
}
