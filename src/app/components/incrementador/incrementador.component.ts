import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  constructor() { }
  // EL INPUT QUIERE DECIR QUE RECIBIRA UN VALOR DESDE EL COMPONENTE PADRE
  // @Input() progreso: number = 50;

  // RENOMBRER EL INPUT (EN EL HTML PADRE LA VARIABLE QUE SE MANDA ES 'valor')
  @Input('valor') progreso: number = 50;
  //cambiar estilo con inputs
  @Input() btnClass: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number>= new EventEmitter();


  cambiarValor(valor: number) {
    if(this.progreso >= 100 && valor >=0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }else if(this.progreso <= 0 && valor <=0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    } 
    console.log(this.progreso);
    this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso);
   
  }
  onChange(nuevoValor:number){
    if(nuevoValor >=100){
      this.progreso=100;
    }else if(nuevoValor <=0){
      this.progreso=0;
    }
    this.valorSalida.emit(this.progreso);
  }

  ngOnInit(): void {
  }

}
