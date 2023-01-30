import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "varchar", length: 155 })
  name!: string

  @Column({ type: "varchar", length: 100, unique: true })
  email!: string

  @Column({ type: "bigint", unsigned: true, unique: true })
  cpf!: string | number

  @Column({ type: "date" })
  birthDate!: Date | string

  @Column({ type: "decimal", unsigned: true, precision: 65, scale: 2 })
  salary!: string | number

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  @DeleteDateColumn()
  deleted_at!: Date
}