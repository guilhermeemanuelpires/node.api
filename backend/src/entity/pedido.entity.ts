import { CidadeEntity } from "./cidade.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ClienteEntity } from "./cliente.entity";
import { VendedorEntity } from "./vendedor.entity";

@Entity({ name: 'pedido' })
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 6 })
    codigo: string;

    @Column({ nullable: false, type: 'date' })
    dtpedido: Date;

    @Column({ nullable: true, length: 255 })
    observacao: string;

    @ManyToOne(type => ClienteEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'cliente_id' })
    cliente: ClienteEntity;

    @ManyToOne(type => VendedorEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'vendedor_id' })
    vendedor: VendedorEntity;

}