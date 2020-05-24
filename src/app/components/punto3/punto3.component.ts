import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  venta: Pasaje;
vector_ventas: Array<Pasaje>;
precio_descuento: number = 0;
precio_actual : number = 0;
totalCategoriaM : number = 0;
totalCategoriaJ : number = 0;
totalCategoriaA : number = 0;
totalGeneral : number = 0;
mostrar:boolean=false;

constructor(private ventasservice: VentasService) {
this.venta = new Pasaje();
this.vector_ventas = new Array<Pasaje>();
this.listVenta();
}

ngOnInit(): void {
}

onSubmit(f) {
  console.log(f.value);
  }
  
  public calcularDescuento() {
    if (this.venta.categoriapasajero == 'm') {
    this.precio_descuento = (this.venta.precio * 25) / 100;
    this.precio_actual = this.venta.precio - this.precio_descuento;
    this.mostrar=true;
    this.totalCategoriaM = this.totalCategoriaM + 1;
    this.totalGeneral = this.totalGeneral + this.precio_descuento;
  }
    if (this.venta.categoriapasajero == 'j') {
    this.precio_descuento = (this.venta.precio * 50) / 100;
    this.precio_actual = this.venta.precio - this.precio_descuento;
    this.mostrar=true;
    this.totalCategoriaJ = this.totalCategoriaJ + 1;
    this.totalGeneral = this.totalGeneral + this.precio_descuento;
    }

    if (this.venta.categoriapasajero == 'a') {
         this.totalCategoriaA = this.totalCategoriaA + 1;
         this.totalGeneral = this.totalGeneral + this.venta.precio;
      }
  }
  public saveVenta() {
    this.venta.fechacompra = new Date();
    this.ventasservice.saveVenta(this.venta);
    this.venta = new Pasaje(); 
    this.precio_actual = 0;
    this.precio_descuento = 0;
    this.mostrar=false;
  }
  
  public listVenta() {
  this.vector_ventas = this.ventasservice.listVenta(); 
  }

  public limpiarVenta(){
    this.venta = new Pasaje();
  }

}




