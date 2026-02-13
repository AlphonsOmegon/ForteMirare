import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Entity1 } from "./Entity1"

@Entity()
export class Entity2 {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @ManyToOne(() => Entity1, e1 => e1.entity2s)
  entity1!: Entity1
}