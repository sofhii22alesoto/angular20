export class Mensaje {
    para : number;
    de : number;
    texto : string;
    Mensaje(para?:number,de?:number,texto?:string,mensajePara?:number){
        this.para = para;
        this.de = de;
        this.texto = texto;


    }
}
