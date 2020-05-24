import { Injectable } from '@angular/core';
import {Palabra} from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {
palabras = new Array<any>();

  constructor() { 
   this.palabras = new Array<Palabra>(); 
  this.palabras = [
      {
        id: 0,
        categoria : "animal",
        castellano: "cerdo",
        ingles: "pigs",
        scr: "cerdo.jpg",
      },
      {
        id : 1,
        categoria : "animal",
        castellano : "leon",
        ingles : "león",
        scr : "leon.jpg",
      },
      {
        id : 2,
        categoria : "animal",
        castellano : "tigre",
        ingles : "tiger",
        scr : "tigre.jpg",
      },
      {
        id : 3,
        categoria : "animal",
        castellano : "perro",
        ingles : "dog",
        scr : "perro.jpg",
      },
      {
        id : 4,
        categoria : "utiles",
        castellano : "goma",
        ingles : "eraser",
        scr : "goma.jpg",
      },
      {
        id : 5,
        categoria : "utiles",
        castellano : "regla",
        ingles : "rule",
        scr : "regla.jpg",
      },
      {
        id : 6,
        categoria : "utiles",
        castellano : "tijera",
        ingles : "scissors",
        scr : "tijera.jpg",
      },
      {
        id : 7,
        categoria : "utiles",
        castellano : "cartuchera",
        ingles : "pencil case",
        scr : "cartuchera.jpg",
      },
      
    ]
  }

  getPalabras(){
    return this.palabras;
  }
}
