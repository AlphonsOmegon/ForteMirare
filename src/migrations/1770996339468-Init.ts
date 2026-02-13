import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1770996339468 implements MigrationInterface {
    name = 'Init1770996339468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entity1" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_646624c2139fb542f990d5bdffa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "entity2" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "entity1Id" integer, CONSTRAINT "PK_5f728322281630d04c808febd8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "entity2" ADD CONSTRAINT "FK_47bcff5f92ccd60af81ae937750" FOREIGN KEY ("entity1Id") REFERENCES "entity1"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entity2" DROP CONSTRAINT "FK_47bcff5f92ccd60af81ae937750"`);
        await queryRunner.query(`DROP TABLE "entity2"`);
        await queryRunner.query(`DROP TABLE "entity1"`);
    }

}
