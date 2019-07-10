import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/servicios/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  listalc:Lista;
  nombreItem:string;

  constructor(private listdeseo:DeseosService, private idroute:ActivatedRoute) {
    const idlist = idroute.snapshot.paramMap.get('idlista');
    console.log(idlist);
    this.listalc=listdeseo.cargarlista(idlist);
    console.log(this.listalc);
   }

  ngOnInit() {
  }
  agregarItem(){
    if(this.nombreItem.length>0){
      const nuevoItem = new ListaItem(this.nombreItem);
      this.listalc.items.push(nuevoItem);
      this.listdeseo.guardarStorage();
    }else{
      alert("Inserte un valor valido");
    }
    this.nombreItem='';
  }
  eliminarItem(ind:number){
    this.listalc.items.splice(ind,1);
    this.listdeseo.guardarStorage();
  }
  cambioEstado(item:ListaItem){
    const itpdtes = this.listalc.items.filter(itemdata=>{
      return !itemdata.estado;
    }).length;
    if(itpdtes===0){
      this.listalc.estado=true;
      this.listalc.terminadaEn=new Date();
    }else{
      this.listalc.estado=false;
      this.listalc.terminadaEn=null;
    }
    this.listdeseo.guardarStorage();
    console.log(this.listdeseo.listas);
    
  }

}
