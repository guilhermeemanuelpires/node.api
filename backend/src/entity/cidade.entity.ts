import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, EntityRepository, JoinColumn } from "typeorm";
import { EstadoEntity } from "./estado.entity";

@Entity({ name: 'cidade' })
export class CidadeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 100 })
    nome: string;

    //lazy = não retona objetos relacioando
    //eager = retona os dados do objetos relacionado
    @ManyToOne(type => EstadoEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'estado_id' })
    estado: EstadoEntity;

    @Column({ type: 'double', nullable: false })
    lat: number;

    @Column({ type: 'double', nullable: false })
    lng: number;

}