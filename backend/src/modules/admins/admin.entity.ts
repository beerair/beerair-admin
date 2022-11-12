import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  password: string;
}
