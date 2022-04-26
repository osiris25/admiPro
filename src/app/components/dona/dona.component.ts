import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  @Input() titulo:string = 'Sin titulo';
  // Doughnut
  @Input() labels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() data= [ 350, 75, 100 ]
  
  public doughnutChartData: ChartData<'doughnut'> = {
   
    labels: this.labels,
    datasets: [ 
      { data:this.data,
        backgroundColor: ['#00821C','#09DB36','#024D0F']},
        ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
