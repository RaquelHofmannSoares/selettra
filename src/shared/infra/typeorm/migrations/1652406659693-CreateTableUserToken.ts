import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUserToken1652406659693 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "UserToken",
                columns: [
                    {
                        name: "id",
                        type: "numeric",
                        isPrimary: true,
                    },
                    {
                        name: "refreshToken",
                        type: "varchar",
                        length: "4000",
                        isNullable: false,
                    },
                    {
                        name: "username",
                        type: "varchar",
                        length: "4000",
                        isNullable: false,
                    },
                    {
                        name: "expiresDate",
                        type: "timestamp",
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
        await queryRunner.dropTable("UserToken");
    }
}
