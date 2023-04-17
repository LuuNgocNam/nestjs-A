import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'class' })
export class Class {
  @PrimaryGeneratedColumn()
  class_id: number;

  @Column({ name: 'school_id', nullable: true })
  school_id: number;

  @Column({ name: 'student_id', nullable: true })
  student_id: number;

  @Column({ name: 'title', nullable: true })
  tiltle: string;

  @Column({ name: 'time', nullable: true })
  time: string;

  constructor(partial: Partial<Class>) {
    Object.assign(this, partial);
  }
}
