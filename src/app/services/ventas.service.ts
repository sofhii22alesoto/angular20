import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  vector_Ventas :Array<Pasaje>; 

  constructor() { 
    this.vector_Ventas = new Array<Pasaje>();


    
  }

listVenta(){
   return this.vector_Ventas;

}

saveVenta( venta: Pasaje){
  this.vector_Ventas.push(venta);
}



  
}
