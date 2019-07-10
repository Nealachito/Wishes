import { ListaItem } from './lista-item.model';

export class Lista{
    id : number;
    titulo : string;
    creadaEn : Date;
    terminadaEn : Date;
    estado: boolean;
    items:ListaItem[];

    constructor(title: string){
        this.titulo = title;
        this.creadaEn = new Date();
        this.estado = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}