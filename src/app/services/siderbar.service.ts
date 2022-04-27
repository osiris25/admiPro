import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {
// SERVICIOS PARA CENTRALIZAR LAS OPCIONES DEL MENU
menu: any[] = [
  {
    titulo:'Home',
    icono:'mdi mdi-gauge',
    submenu:[
      {titulo:'Main', url:'/'},
      {titulo:'ProgressBar', url:'progress'},
      {titulo:'Gráficas', url:'grafica1'},

    ]
  }
]

  constructor() { }
}
