import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: 'post'})
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ default: true })
    isActive: boolean;
}
