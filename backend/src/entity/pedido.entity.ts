import { CidadeEntity } from "./cidade.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ClienteEntity } from "./cliente.entity";
import { VendedorEntity } from "./vendedor.entity";
import { TabelaprecoEntity } from "./tabelapreco.entity";
import { ItemPedidoEntity } from "./itempedido.entity";

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

    @ManyToOne(type => TabelaprecoEntity, { eager: true, nullable: true })
    @JoinColumn({ name: 'tabelapreco_id' })
    tabelapreco: TabelaprecoEntity;

    @ManyToOne(type => ClienteEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'cliente_id' })
    cliente: ClienteEntity;

    @ManyToOne(type => VendedorEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'vendedor_id' })
    vendedor: VendedorEntity;

    @OneToMany(type => ItemPedidoEntity, item => item.pedido, { eager: true })
    itens: ItemPedidoEntity[];

}   