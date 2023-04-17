import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';


const { v4: uuidv4 } = require('uuid');
uuidv4();
@Entity({name: 'user'})
export class User {

    
    @PrimaryGeneratedColumn()
    id: uuidv4;

    @Column()
    email: string;
  
    @Column()
    name: string;
  
    @Column()
    password: string;
}
