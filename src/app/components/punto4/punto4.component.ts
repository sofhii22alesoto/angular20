import { Component, OnInit } from '@angular/core';
import {PalabrasService} from 'src/app/services/palabras.service';
import {Palabra} from 'src/app/models/palabra';
  

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
palabras : Array<Palabra>;
palabra : Palabra;

PalabraIngles : Array<string>;
PalabraUsuario : Array<string>;

cantidad_puntaje : number = 0;
cantidad_vidas : number = 6;

puntajeTotal : number = 0;

indicePalabraActual : number;
longitudPalabraActual : number;
letra0 : string;
letra1 : string;
letra2 : string;
letra3 : string;
letra4 : string;
letra5 : string;
letra6 : string;
letra7 : string;
letra8 : string;
letra9 : string;
letra10 : string;

  constructor(private palabrasService : PalabrasService){
    this.obtenerPalabras();
    this.iniciarJuego();
  }

    obtenerPalabras(){
      this.palabras = this.palabrasService.getPalabras();
    }

  ngOnInit(): void {
  }

    iniciarJuego(){
      this.letra0 = "";
      this.letra1 = "";
      this.letra2 = "";
      this.letra3 = "";
      this.letra4 = "";
      this.letra5 = "";
      this.letra6 = "";
      this.letra7 = "";
      this.letra8 = "";
      this.letra9 = "";
      this.letra10 = "";

        this.indicePalabraActual = 0;
        this.palabra = this.palabras[this.indicePalabraActual];
        this.longitudPalabraActual = this.palabra.ingles.length;

        this.PalabraIngles = this.palabra.ingles.split("");

        var palabraU = this.palabra.ingles;
        palabraU = palabraU.replace(/./gi, ' ');
        this.PalabraUsuario = palabraU.split("");

        console.log(this.PalabraIngles);
        console.log(this.PalabraUsuario);
    }

    ponerLetra(){
      console.log("cambiado");
      console.log(this.PalabraUsuario.join(""));
      console.log(this.PalabraIngles.join(""));
      this.PalabraUsuario[0] = this.letra0;
      this.PalabraUsuario[1] = this.letra1;
      this.PalabraUsuario[2] = this.letra2;
      this.PalabraUsuario[3] = this.letra3;
      this.PalabraUsuario[4] = this.letra4;
      this.PalabraUsuario[5] = this.letra5;
      this.PalabraUsuario[6] = this.letra6;
      this.PalabraUsuario[7] = this.letra7;
      this.PalabraUsuario[8] = this.letra8;
      this.PalabraUsuario[9] = this.letra9;
      this.PalabraUsuario[10] = this.letra10;
     


      if(this.PalabraUsuario.join("") == this.PalabraIngles.join("")){
        alert("son iguales ...!!!");
        this.cantidad_puntaje = this.cantidad_puntaje + 1;
        this.puntajeTotal = this.puntajeTotal + this.cantidad_puntaje;
        this.cambiarSiguientePalabra(); 
       
      }
      if(this.PalabraUsuario.join("") !== this.PalabraIngles.join("")){
        this.cantidad_vidas = this.cantidad_vidas - 1;
      }
      

      
    }
    cambiarSiguientePalabra(){
      this.letra0 ="";
      this.letra1 ="";
      this.letra2 ="";
      this.letra3 ="";
      this.letra4 ="";
      this.letra5 ="";
      this.letra6 ="";
      this.letra7 ="";
      this.letra8 = "";
      this.letra9 = "";
      this.letra10 = "";
    }

    LimpiarVP(){
      this.cantidad_vidas = 0;
      this.cantidad_puntaje = 0;
      this.puntajeTotal = 0;
    }
    
      
  
}
