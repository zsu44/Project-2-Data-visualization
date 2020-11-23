d3.select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height',height + margin.top + margin.bottom)
  .attr('id', 'chart')

let chart = d3.select('#chart')
  .append('g')
  .attr('transform','translate('+ margin.left +','+ margin.top +')');
//set the margin of the graph
var margin = {top: 50, right: 20, bottom: 350, left: 30},
  width = 500- margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

d3.csv("./Data.csv").
var y = d3.scaleLinear()
    .domain([0,15])
    .range([height,0])
var x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, 250])
    .padding(0.6);

let xScale = d3.scaleLinear()
  .domain([0,15])
  .range([0,100])