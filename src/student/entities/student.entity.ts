import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  student_id: number;

  @Column({ name: 'class_id', nullable: true })
  class_id: number;

  @Column()
  Fisrt_name: string;

  @Column()
  Last_name: string;

  @Column()
  Date_of_birth: string;

  @Column()
  Email: string;

  @Column()
  Phone: number;

  constructor(partial: Partial<Student>) {
    Object.assign(this, partial);
  }
}
export default Student;
