import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateTableColaborador1654306200585 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Colaborador",
                columns: [
                    {
                        name: "matricula",
                        type: "varchar",
                        length: "4000",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "4000",
                        isNullable: false,
                    },
                    {
                        name: "birthdate",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "wage",
                        type: "numeric",
                        isNullable: false,
                    },
                    {
                        name: "cargoId",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "setorId",
                        type: "integer",
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

        await queryRunner.createForeignKey(
            "Colaborador",
            new TableForeignKey({
                name: "FK_Colaborador_Cargos",
                columnNames: ["cargoId"],
                referencedColumnNames: ["id"],
                referencedTableName: "Cargos",
            })
        );

        await queryRunner.createForeignKey(
            "Colaborador",
            new TableForeignKey({
                name: "FK_Colaborador_Setores",
                columnNames: ["setorId"],
                referencedColumnNames: ["id"],
                referencedTableName: "Setores",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Colaborador");
    }
}
