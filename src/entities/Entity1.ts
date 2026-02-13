import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Entity1 {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @OneToMany("Entity2", "entity1")
  entity2s!: any[]
}