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
  marcas = ["RENAULT", "RENAULT", "RENAULT", "TESLA"]
  modelos = ["scenic", "ibiza", "megane", "model 3"]
  anos = ["2007", "2003", "2007", "2007"]
  fechaVenta = ["04-2018", "03-2018", "	03-2018", "	03-2018"]
  precios = [5000, 1200, 3500, 4000];
  pvps = [this.precios[0] * 1.21, this.precios[1] * 1.21, this.precios[2] * 1.21, this.precios[3] * 1.21];

  

  public rebajar(i: number) {
    this.precios[i] = this.precios[i] * 0.9;
    this.pvps[i] = this.pvps[i] * 0.9;;
  }

  public vendido(i: number){
    //this.precios.splice(i,1);
    delete this.marcas[i];
    delete this.modelos[i];
    delete this.anos[i];
    delete this.fechaVenta[i];
    delete this.precios[i];
    delete this.pvps[i];
  }
}
