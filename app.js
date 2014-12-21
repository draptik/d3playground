'use strict';

var indicatorData = [
  {
    'min': 10,
    'norm': 40,
    'max': 90,
    'color': 'red'
  },
  {
    'min': 20,
    'norm': 50,
    'max': 70,
    'color': 'green'
  }, {
    'min': 8,
    'norm': 45,
    'max': 75,
    'color': 'blue'
}];



var svg = d3.select('#d3container').append('svg')
  .attr('width', 800)
  .attr('height', 300)
  .style('border', '1px solid black');

var rectangles = svg.selectAll('rect')
  .data(indicatorData)
  .enter()
  .append('rect');

var width = 100;
var xpos = width * 1.4;

var rectangleAttributes = rectangles
  .attr('x', function (d, i) {
    return i * xpos;
  })
  .attr('y', function (d) {
    return d.min;
  })
  .attr('height', function (d) {
    return d.max;
  })
  .attr('width', function (d) {
    return width;
  })
  .style('fill', function (d) {
    return d.color;
  });
