var data = [
    {name: 'Entertainment', number: 12 },
    {name: 'Educational', number: 4 },
];
d3.select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height',500)
  .attr('id', 'chart')

let chart = d3.select('#chart')
  .append('g')
  .attr('transform','translate(30,10)')
var margin = {top: 50, right: 20, bottom: 350, left: 30},
  width = 500- margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;
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
// let yScale = d3.scaleLinear()
//   .domain([0,15])
//   .range([100,0])
 

chart.append('g')//first bar graph
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.number,b.number)))
    .enter()
        .append('rect')
        .attr('x', (d, i)=> x(i))
        .attr('y',d => y(d.number))
        .attr('width',35)
        .attr('height',d =>height - y(d.number))
        .style('fill','Black')
    

    // let xLabels = chart.append('g')
    //      .selectAll('text')
    //      .data(data)
  
    //   xLabels
    //      .enter()
    //           .append('text')
    //           .attr('font-size','12px')
    //           .attr('font-family','Arial')
    //           .style("text-anchor","middle")
    //           .attr('transform', d => `translate(${-25 + 40*d[0]}, 120)`) // , rotate(-30)
    //           .attr('x', 0)
    //           .attr('y', 0)
    //           .text(d => d )
      // xLabels 
      //         .selectAll('text')
      //         .data(forage)
      //         .text(d => d)
      //         .attr('transform', 'translate(-20 -20) rotate(-30)')
let name= chart.append('text')
    .attr('transform', 'translate(160,150)')
      .text('Video Type')
      .style("text-anchor","middle")
      .attr('font-size','12px')
      .attr('fill','black')
let name2= chart.append('text')
    .attr('transform', 'translate(0,60) rotate(270)')
      .text('Total Videos')
      .attr('font-size','12px')
      .style("text-anchor","middle")
      .attr('fill','black')

let stickers = chart.append('text')
        .text("12")
        .attr('x', 90)
        .attr('y', 15)
        .style('fill', 'black')
        .attr('font-size','12px')
let stickers2 = chart.append('text')
        .text("4")
        .attr('x', 180)
        .attr('y', 60)
        .style('fill', 'black')
        .attr('font-size','12px')
function yAxis(g) {
        g.attr("transform", `translate(${margin.left}, 0)`)
         .call(d3.axisLeft(y).ticks(null, data.format))
         .attr("font-size", '10px')
          }
          
function xAxis(g) {
              g.attr("transform", `translate(0,${height})`)
              g.call(d3.axisBottom(x).tickFormat(i => data[i].name))
              .attr("font-size", '10px')
          }
//chart.append('g')
    //.attr('transform', 'translate(10, 100)')
    //.call(d3.axisLeft(y).ticks(5))
    chart.append("g").call(xAxis);
    chart.append("g").call(yAxis);
    chart.node();