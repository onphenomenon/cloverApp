import { Component, Input, OnChanges, AfterContentInit, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

//import { STATISTICS } from './shared/data';

@Component({
  selector: 'inventory-graph',
  templateUrl: './inventory-graph.component.html',
  styleUrls: ['./inventory-graph.component.scss']
})
export class InventoryGraphComponent implements OnChanges {
  @Input() inventoryItems: Array<any>;
  private width: number;
  private height: number;
  private margin = { top: 50, right: 50, bottom: 50, left: 50 };
  private initialRender = false;
  myColors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];
  private x: any;
  private y: any;
  private svg: any;
  private g: any;

  choosenColor = 0;

  constructor() {
  }

  ngOnChanges() {
    console.log("Initial? ", this.initialRender, "items ? ", this.inventoryItems)
    if (!this.initialRender) {
      this.initSvg()
      this.initAxis();
      this.drawAxis();
      this.drawBars();
      this.initialRender = true;
    }
  }

  private initSvg() {
    this.svg = d3.select("svg");
    this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");;
  }

  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.60);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.inventoryItems.map((d) => d.name));
    this.y.domain([0, d3Array.max(this.inventoryItems, (d) => d.stockCount)]);
  }

  private drawAxis() {
    this.g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.x))
      .selectAll("text")
      .attr("y", 20)
      .attr("x", -40)
      .attr("dy", ".35em")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "start");;
    this.g.append("g")
      .attr("class", "axis axis--y")
      .call(d3Axis.axisLeft(this.y).ticks(6))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");
  }

  private drawBars() {


    this.g.selectAll(".bar")
      .data(this.inventoryItems)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d) => this.x(d.name))
      .attr("y", (d) => this.y(d.stockCount))
      .attr("width", this.x.bandwidth())
      .attr("height", (d) => this.height - this.y(d.stockCount))
      .attr("fill", (d) => {
        this.choosenColor++;
        if (this.choosenColor === this.myColors.length) {
          this.choosenColor = 0;
        }
        return this.myColors[this.choosenColor];
      });
  }
}
