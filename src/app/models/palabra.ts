
export class Palabra {
    id : number;
    categoria : string;
    castellano : string;
    ingles : string;
    scr : string;

    Palabra(id?:number,categoria?:string,castellano?:string,ingles?:string,scr?:string,){
        this.id = id;
        this.categoria = categoria;
        this.castellano = castellano;
        this.ingles = ingles;
        this.scr = scr;

    }
}
