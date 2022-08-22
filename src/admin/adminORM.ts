import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Admin } from "./admin.interface";

@Entity({name: "Admin"})
@Unique(["email"])
export class AdminORM implements Admin {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
}