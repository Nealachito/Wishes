import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/servicios/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @Input() Terminada=true;
  @ViewChild(IonList) itLt:IonList;
  
  constructor(public wishService:DeseosService, private ruta:Router, public alerte:AlertController) { }

  ngOnInit() {}
  listaSeleccionada(lisSel:Lista){
    console.log(lisSel);
    if(this.Terminada){
      this.ruta.navigateByUrl(`/tabs/tab2/agregar/${lisSel.id}`);  
    }else{
      this.ruta.navigateByUrl(`/tabs/tab1/agregar/${lisSel.id}`);
    }
  }
  eliminarLista(lisSel:Lista){
    console.log("Eliminando Lista");
    this.wishService.eliminarLista(lisSel);
  }
  async editarNombLista(listaSel:Lista){
    console.log("Editando nombre de lista!");
    const alerta = await this.alerte.create({
      header: 'Editar Lista',
      buttons:[{
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{
          alert("Bah, Cancelaste la edición");
        }
        },{
          text: 'Editar',
          role: 'ok',
          handler: (data)=>{
            if(data.editlista.length>0){
              listaSel.titulo=data.editlista;
              this.wishService.guardarStorage();
              this.itLt.closeSlidingItems();
              console.log(listaSel);
            }else{
              alert("Debe introducir un valor en el campo lista");
            }
            
          }
        }
      ],
      inputs:[{
          name:'editlista',
          type:'text',
          value:listaSel.titulo,
          placeholder:'Insertar Nueva lista'
        }]
    });
    await alerta.present();
    
  }

}
