import { Component } from '@angular/core';
import { DeseosService } from 'src/app/servicios/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listas:Lista[]=[];
  constructor( public wishService:DeseosService,private ruta:Router, public alert:AlertController) {
    this.listas=wishService.listas;
    console.log(this.listas);
  }
  
  async agregarlist(){
    const alerta = await this.alert.create({
      header: 'Nueva Lista',
      buttons:[{
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{
          alert("Bah, Cancelaste la creación");
        }
        },{
          text: 'Ok',
          role: 'ok',
          handler: (data)=>{
            if(data.nuevalista.length>0){
              const idlista=this.wishService.crearlista(data.nuevalista);
              this.ruta.navigateByUrl(`/tabs/tab1/agregar/${idlista}`);
            }else{
              alert("Debe introducir un valor en el campo lista");
            }
            
          }
        }
      ],
      inputs:[{
          name:'nuevalista',
          type:'text',
          placeholder:'Insertar Nueva lista'
        }]
    });
    await alerta.present();
  }
 

}
