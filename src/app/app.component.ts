import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  view = [800,600];
  showLegend = false;
  curve = shape.curveBundle.beta(1);
  // curve = d3.curveStepBefore;
  graph: any;
  colorScheme = 'picnic';
  orientation = 'TopToBottom';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.buildGraph();
  }

  buildGraph(): void {
    this.http
      .get<object>('/assets/graph1.json')
      .subscribe(graph => {
        this.graph = graph;
      });
  }

  onLegendLabelClick(event: any): void {
  }

  select(event: any): void {
  }
}
