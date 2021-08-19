import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1629415515679 implements MigrationInterface {
    name = 'Init1629415515679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."my_example" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "title" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0fb3b7604843e4469b5b43726d9" PRIMARY KEY ("id", "name"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."my_example"`);
    }

}
