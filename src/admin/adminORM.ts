import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Admin } from "./admin.interface";
import { Role } from "../auth/role.enum";

@Entity({name: "Admin"})
@Unique(["login"])
export class AdminORM implements Admin {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  login: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column({
    type: "enum",
    enum: Role,
    default: Role.ADMIN,
  })
  role: Role;
}