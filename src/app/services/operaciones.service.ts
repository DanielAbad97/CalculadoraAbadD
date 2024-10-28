import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  private operacion: { operacion: string; valorA: number ;valorB: number;resultado: number }[] = [];

  constructor() {}

  agregarOperacion(operacion: string, valorA: number ,valorB: number,resultado: number) {
    this.operacion.push({ operacion, valorA, valorB , resultado});
  }
  
  obtenerOperacion() {
    return this.operacion;
  }

 

}