import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Admin {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static from(id: string, name: string, password: string) {
    const admin = new Admin();
    admin.id = id;
    admin.name = name;
    const encrypted = bcrypt.hashSync(password, bcrypt.genSaltSync());
    admin.password = encrypted;
    return admin;
  }
}
