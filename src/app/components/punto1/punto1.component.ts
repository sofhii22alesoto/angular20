import { Component, OnInit } from '@angular/core';
import {Mensaje} from './../../models/mensaje';



@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css'],
 
})


export class Punto1Component implements OnInit {
  
mensaje : Mensaje;
tamMaxTexto : number =120;
tamTexto : number;
mensajePara :'';
mensajeDe :'';

 
  constructor( ) {  
    this.mensaje = new Mensaje(); 
  }
  
  
  ngOnInit(): void {
  }

  
  public cambiarTamTexto(){
   this.tamTexto = this.tamMaxTexto - this.mensaje.texto.length;
    console.log(this.tamMaxTexto);
  }

  public enviarMensaje(){
    
  }

}

