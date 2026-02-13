import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Entity2 } from "./Entity2"

@Entity()
export class Entity1 {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @OneToMany(() => Entity2, e2 => e2.entity1)
  entity2s!: Entity2[]
}