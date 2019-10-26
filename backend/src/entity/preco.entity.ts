import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity({ name: 'preco' })
export class PrecoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 6 })
    codigo: string;

    @Column({ nullable: false, length: 50 })
    nome: string;

    @Column({ nullable: false,type: 'double' })
    fator: string;
}