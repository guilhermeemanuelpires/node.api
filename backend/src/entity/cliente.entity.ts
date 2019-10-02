import { CidadeEntity } from "./cidade.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'cliente' })
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 220 })
    nome: string;

    @Column({ nullable: false })
    codigo: string;

    @Column()
    email: number;

    @ManyToOne(type => CidadeEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'cidade_id' })
    cidade: CidadeEntity;

}