import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'school' })
export class School {
  @PrimaryGeneratedColumn()
  school_id: number;

  @Column()
  name: string;

  @Column()
  time: string;

  constructor(partial: Partial<School>) {
    Object.assign(this, partial);
  }
}
