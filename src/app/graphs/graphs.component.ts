import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  graph1 = {
    data: [
      { x: [1, 2, 3,4], y: [2, 3, 4, 5], type: 'bar' },
    ],
    layout: {title: 'Some Data to Hover Over'}
   
}
// Line chart
graph2 = {
  data: [
    { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'line' , marker:{ color:'black'} },
    { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
    { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
    { x: [1, 2, 3, 4, 5], y:[2, 4, 5, 6, 9],  type:  'bar'}
  ],
  layout: {title: 'Some Data to Highlight'}
}
graph3 = {
  data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'black'} },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
  ],
  layout: {width: 500, height: 500, title: 'A Fancy Plot'}
}
graph4 = {
  data : [
    {values: [19, 26, 55],labels: ['Residential', 'Non-Residential', 'Utility'],type: 'pie'}
  ],
  layout :{ height: 400, width: 500, title: 'Pie Chart'}
  }

}


