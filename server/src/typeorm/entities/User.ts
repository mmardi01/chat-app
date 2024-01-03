import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'users'} )
export class User {
  @PrimaryGeneratedColumn('uuid')
  id:string;
  
  @Column({ unique: true })
  username: string;

  @Column()
  email:string;
  
  @Column()
  password: string;

  @Column()
  image: string;

  @Column({ default: new Date() })
  createdAt: Date;
}