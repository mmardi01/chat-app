import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from './User';


@Entity({name: 'room'})
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => User,(user) => user.rooms)
    members: User[]
}