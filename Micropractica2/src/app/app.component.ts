import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micropractica2';
  public x: number = 0;

  coche1:ICoche={
    marca: "RENAULT",
    modelo: "scenic",
    ano: 2007,
    fecha: "04-2018",
    precio: 5000,
    PVP: 6050
  };

  coche2:ICoche={
    marca: "SEAT",
    modelo: "ibiza",
    ano: 2003,
    fecha: "03-2018",
    precio: 1200,
    PVP: 1452
  };

  coche3:ICoche={
    marca: "RENAULT",
    modelo: "megane",
    ano: 2007,
    fecha: "03-2018",
    precio: 3500,
    PVP: 4235
  };

  coche4:ICoche={
    marca: "TESLA",
    modelo: "model 3",
    ano: 2007,
    fecha: "03-2018",
    precio: 4000,
    PVP: 4840
  };

  public rebajar(coche:ICoche) {
    coche.precio =  coche.precio * 0.9;
    coche.PVP = coche.PVP * 0.9;
  };

  public vendido(id:string) {
    document.getElementById(id)?.remove();
  };

  public coches:Array<ICoche>=[this.coche1, this.coche2, this.coche3, this.coche4];
}

export interface ICoche{
  marca?: string;
  modelo: string;
  ano: number;
  fecha:string;
  precio: number;
  PVP: number;
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