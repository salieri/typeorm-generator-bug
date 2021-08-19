import { Column, CreateDateColumn, Entity, /* Index, */ PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
// @Index('idxTest', ['name', 'title', 'example'])
export class MyExample {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @PrimaryColumn({ type: String })
  name!: string;

  @Column({ type: String, nullable: false })
  title!: string;

  // @Column({ type: String, default: '' })
  // example!: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;
}
