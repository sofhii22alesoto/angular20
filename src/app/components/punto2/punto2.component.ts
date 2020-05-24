import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Array<any>;
  usuario: '';
  nombreOrganizacion:"";
  requiereConstancia: Boolean;


  constructor() { 

    this.asistente = [ 
      { "usuario": "paula12g@gmail.com", 
        "nombreOrganizacion": "UEM", 
        "requiereConstancia": "Si",
         },

      { "usuario": "martagri@gmail.com", 
         "nombreOrganizacion": "FGP", 
         "requiereConstancia": "Si",
        }, 
      { "usuario": "josefina@gmail.com", 
         "nombreOrganizacion": "RST", 
        "requiereConstancia": "No",
      },
      { "usuario": "pablo@gmail.com", 
         "nombreOrganizacion": "HAT", 
        "requiereConstancia": "No",
       },
       { "usuario": "francisco@gmail.com", 
          "nombreOrganizacion": "MRS", 
          "requiereConstancia": "Si",
        },
        { "usuario": "nestor2020@gmail.com", 
          "nombreOrganizacion": "OPQ", 
          "requiereConstancia": "No",
        },
      
            ]
  }

  Registrar() {
    alert("Se ha registrado");
    console.log(this.usuario,this.nombreOrganizacion,this.requiereConstancia);
    this.asistente.push({usuario: this.usuario,nombreOrganizacion:this.nombreOrganizacion,requiereConstancia : this.requiereConstancia});
    return false;
    }
  ngOnInit(): void {
  }

}
