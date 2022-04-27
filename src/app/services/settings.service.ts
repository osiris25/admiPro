import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {
    let theme = localStorage.getItem('theme') || 'assets/css/colors/purple.css'
    this.linkTheme?.setAttribute(`href`,theme);
   }

   public changeTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute(`href`, url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }
   public checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach((ele) => {
      //REMUEVE LA CLASE WORKING
      ele.classList.remove('working');
      //SE OBTIENE EL VALOR DEL ATRIBUTO
      const btnTheme = ele.getAttribute('data-theme');
      //SE ARMA EL URL CON EL VALOR ALMACENADO EN btnTheme
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
      //SE OBTIENE EL VALOR DEL ATRIBUTO href
      const currentTheme = this.linkTheme?.getAttribute('href');
      //SE HACE LA VALIDACION
      if (btnThemeUrl === currentTheme) {
        ele.classList.add('working');
      }
    });
  }
}
