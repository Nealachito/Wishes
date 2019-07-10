import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[]=[];
  constructor() { 
    /*const list1 = new Lista("Desarrollar anteproyecto");
    const list2 = new Lista("Realizar modelos UML para proyecto final");
    const list3 = new Lista("Escoger Herramientas de desarrollo para PRO");
    const list4 = new Lista("Realizar Desarrollo de Software");
    this.listas.push(list1,list2,list3,list4);
    console.log(this.listas);*/
    this.obtenerStorage();
    
  }
  crearlista(nombrelist:string){
    const nuevalista = new Lista(nombrelist);
    this.listas.push(nuevalista);
    this.guardarStorage();
    return nuevalista.id;
  }
  cargarlista(id:string|number){
    id=Number(id);
    return this.listas.find(datalist=>{
      return datalist.id===id;
    });

  }

  eliminarLista(lista:Lista){
    this.listas=this.listas.filter(ldata=>{
      return ldata.id!==lista.id;
    });
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }
  obtenerStorage(){
    if(localStorage.getItem('data')){
      this.listas= JSON.parse(localStorage.getItem('data'));
    }else{
      alert("localStorage is empty");
    }
   
  }
}
