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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bd/2017_Renault_Grand_Scenic_SIG_NAV_DCi_1.5_Front.jpg",
    marca: "RENAULT",
    modelo: "scenic",
    ano: 2007,
    fecha: "04-2018",
    precio: 5000,
    PVP: 6050,
    color: "#1DDC17"
  };

  coche2:ICoche={
    imagen: "https://cdn.motor1.com/images/mgl/M1RWm/s1/guia-de-compra-seat-ibiza-tgi-2019-todas-las-claves.jpg",
    marca: "SEAT",
    modelo: "ibiza",
    ano: 2003,
    fecha: "03-2018",
    precio: 1200,
    PVP: 1452,
    color: "#1DDC17"
  };

  coche3:ICoche={
    imagen: "https://cdn.motor1.com/images/mgl/lXJZN/s1/renault-megane-hybrid-spy-photos.jpg",
    marca: "RENAULT",
    modelo: "megane",
    ano: 2007,
    fecha: "03-2018",
    precio: 3500,
    PVP: 4235,
    color: "#1DDC17"
  };

  coche4:ICoche={
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg",
    marca: "TESLA",
    modelo: "model 3",
    ano: 2007,
    fecha: "03-2018",
    precio: 4000,
    PVP: 4840,
    color: "#EB1616"
  };

  public rebajar(i:number) {
    this.coches[i].precio =  this.coches[i].precio * 0.9;
    this.coches[i].PVP =  this.coches[i].PVP * 0.9;
  };

  public vendido(i:number) {
    this.coches.splice(i,1);
    console.log(this.coches);
  };

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
  color: string;
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