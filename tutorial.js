'use strict';

/*var containerSelection = d3.select('#d3container');

var svgSelection = containerSelection.append("svg")
  .attr("width", 50)
  .attr("height", 50);

var circleSelection = svgSelection.append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple");
*/


/*
var theData = [1, 2, 3];

var p = d3.select('body').selectAll('p')
  .data(theData)
  .enter()
  .append('p')
  .text(function (d, i) { return 'i = ' + i + ' d = ' + d; });
*/


/*
var circleRadii = [40, 20, 10];

var bodySelection = d3.select('#d3container');

var svgContainer = bodySelection.append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black');

var circles = svgContainer.selectAll('circle')
  .data(circleRadii)
  .enter()
  .append('circle');

var circleAttributes = circles
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', function(d) {
    return d;
  })
  .style('fill', function(d) {
    var returnColor;
    if (d === 40) {
      returnColor = 'green';
    } else if (d === 20) {
      returnColor = 'purple';
    } else if (d === 10) {
      returnColor = 'red';
    }
    return returnColor;
  });
*/


//https://www.dashingd3js.com/using-the-svg-coordinate-space

/*
var spaceCircles = [30, 70, 110];

var bodySelection = d3.select('#d3container');

var svgContainer = bodySelection.append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black');

var circles = svgContainer.selectAll('circle')
  .data(spaceCircles)
  .enter()
  .append('circle');

var circleAttributes = circles
  .attr('cx', function(d) {
    return d;
  })
  .attr('cy', function(d) {
    return d;
  })
  .attr('r', 20)
  .style('fill', function(d) {
      var returnColor;
      if (d === 30) {
        returnColor = 'green';
      } else if (d === 70) {
        returnColor = 'purple';
      } else if (d === 110) {
        returnColor = 'red';
      }
      return returnColor;
    });
*/


// https://www.dashingd3js.com/data-structures-d3js-accepts
// https://www.dashingd3js.com/using-json-to-simplify-code

/*
var jsonCircles = [{
  'x_axis': 30,
  'y_axis': 30,
  'radius': 20,
  'color': 'green'
}, {
  'x_axis': 70,
  'y_axis': 70,
  'radius': 20,
  'color': 'purple'
}, {
  'x_axis': 110,
  'y_axis': 110,
  'radius': 20,
  'color': 'red'
}];

var bodySelection = d3.select('#d3container');

var svgContainer = bodySelection.append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black');

var circles = svgContainer.selectAll('circle')
  .data(jsonCircles)
  .enter()
  .append('circle');

var circleAttributes = circles
  .attr('cx', function(d) {
    return d.x_axis;
  })
  .attr('cy', function(d) {
    return d.y_axis;
  })
  .attr('r', function(d) {
    return d.radius;
  })
  .style('fill', function(d) {
    return d.color;
  });
*/


// https://www.dashingd3js.com/svg-basic-shapes-and-d3js

/*
var svgContainer = d3.select('#d3container').append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black');

var rectangle = svgContainer.append('rect')
  .attr('x', 10)
  .attr('y', 10)
  .attr('width', 50)
  .attr('height', 100);

var line = svgContainer.append('line')
  .attr('x1', 70)
  .attr('y1', 10)
  .attr('x2', 140)
  .attr('y2', 110)
  .attr('stroke-width', 2)
  .attr('stroke', 'black');
*/


// https://www.dashingd3js.com/svg-paths-and-d3js

/*
var lineData = [{
  'x': 1,
  'y': 5
}, {
  'x': 20,
  'y': 20
}, {
  'x': 40,
  'y': 10
}, {
  'x': 60,
  'y': 40
}, {
  'x': 80,
  'y': 5
}, {
  'x': 100,
  'y': 60
}];

var lineFunction = d3.svg.line()
  .x(function (d) {
    return d.x;
  })
  .y(function (d) {
    return d.y;
  })
  .interpolate('linear');

var svgContainer = d3.select('#d3container').append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black');

var lineGraph = svgContainer.append('path')
  .attr('d', lineFunction(lineData))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
*/

// https://www.dashingd3js.com/dynamic-svg-coordinate-space

/*
var jsonRectangles = [{
  'x_axis': 10,
  'y_axis': 10,
  'height': 20,
  'width': 20,
  'color': 'green'
}, {
  'x_axis': 160,
  'y_axis': 40,
  'height': 20,
  'width': 20,
  'color': 'purple'
}, {
  'x_axis': 70,
  'y_axis': 70,
  'height': 20,
  'width': 20,
  'color': 'red'
}];

var max_x = 0;
var max_y = 0;

for (var i = 0; i < jsonRectangles.length; i++) {
  var temp_x, temp_y;
  var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
  var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

  if (temp_x >= max_x) {
    max_x = temp_x;
  }

  if (temp_y >= max_y) {
    max_y = temp_y;
  }
}

var svgContainer = d3.select('#d3container').append('svg')
  .attr('width', max_x)
  .attr('height', max_y)

var rectangles = svgContainer.selectAll('rect')
  .data(jsonRectangles)
  .enter()
  .append('rect');

var rectangleAttributes = rectangles
  .attr('x', function (d) {
    return d.x_axis;
  })
  .attr('y', function (d) {
    return d.y_axis;
  })
  .attr('height', function (d) {
    return d.height;
  })
  .attr('width', function (d) {
    return d.width;
  })
  .style('fill', function (d) {
    return d.color;
  });
*/


// https://www.dashingd3js.com/d3js-scales

