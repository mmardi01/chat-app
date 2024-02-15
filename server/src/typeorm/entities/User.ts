import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Room } from './Room';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  image: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @ManyToMany(() => Room, (room) => room.members)
  rooms: Room[]
}
