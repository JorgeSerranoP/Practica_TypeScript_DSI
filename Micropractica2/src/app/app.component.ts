import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micropractica2';
  public x: number = 0;
  public input:string = "";

  coche1:ICoche={
    imagen: "Micropractica2\dist\Micropractica2\assets\images\scenic.jpg",
    marca: "RENAULT",
    modelo: "scenic",
    ano: 2007,
    fecha: "04-2018",
    precio: 5000,
    PVP: 6050,
    visible:true
  };

  coche2:ICoche={
    imagen: "Micropractica2/images/megane.jpg",
    marca: "SEAT",
    modelo: "ibiza",
    ano: 2003,
    fecha: "03-2018",
    precio: 1200,
    PVP: 1452,
    visible:true
  };

  coche3:ICoche={
    imagen: "./Micropractica2/images/megane.jpg",
    marca: "RENAULT",
    modelo: "megane",
    ano: 2007,
    fecha: "03-2018",
    precio: 3500,
    PVP: 4235,
    visible:true
  };

  coche4:ICoche={
    imagen: "./Micropractica2/images/megane.jpg",
    marca: "TESLA",
    modelo: "model 3",
    ano: 2007,
    fecha: "03-2018",
    precio: 4000,
    PVP: 4840,
    visible:true
  };

  public rebajar(coche:ICoche) {
    coche.precio =  coche.precio * 0.9;
    coche.PVP = coche.PVP * 0.9;
  };

  public vendido(i:number) {
    this.coches.splice(i,1);
    console.log(this.coches);
  };

  public filtro(coche:ICoche){
      if(this.input.toUpperCase() == coche.marca){
        return true;
      } else{
        coche.visible = false;
    }
    return false;
  }

  public coches:Array<ICoche>=[this.coche1, this.coche2, this.coche3, this.coche4];
}

export interface ICoche{
  imagen: string;
  marca?: string;
  modelo: string;
  ano: number;
  fecha:string;
  precio: number;
  PVP: number;
  visible: boolean;
}

export class CCoche{
  public rebajar(coche:ICoche) {
    coche.precio =  coche.precio * 0.9;
    coche.PVP = coche.PVP * 0.9;
  };

  public vendido(coche:ICoche) {
    delete coche.marca;
  };
}