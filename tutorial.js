'use strict';

// https://www.dashingd3js.com/adding-an-svg-element

/*
var containerSelection = d3.select('#d3container');

var svgSelection = containerSelection.append('svg')
  .attr('width', 50)
  .attr('height', 50);

var circleSelection = svgSelection.append('circle')
  .attr('cx', 25)
  .attr('cy', 25)
  .attr('r', 25)
  .style('fill', 'purple');
*/

// https://www.dashingd3js.com/binding-data-to-dom-elements
// https://www.dashingd3js.com/using-data-bound-to-dom-elements

/*
var theData = [1, 2, 3];

var p = d3.select('body').selectAll('p')
  .data(theData)
  .enter()
  .append('p')
  .text(function (d, i) { return 'i = ' + i + ' d = ' + d; });
*/

// https://www.dashingd3js.com/creating-svg-elements-based-on-data

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

/*
var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];

var newScaledData = [];
var minDataPoint = d3.min(initialScaleData);
var maxDataPoint = d3.max(initialScaleData);

var linearScale = d3.scale.linear()
  .domain([minDataPoint, maxDataPoint])
  .range([0, 100]);

for (var i = 0; i < initialScaleData.length; i++) {
  newScaledData[i] = linearScale(initialScaleData[i]);
}

console.log(newScaledData);
*/


// https://www.dashingd3js.com/svg-group-element-and-d3js

/*
var circleData = [{
  'cx': 20,
  'cy': 20,
  'radius': 20,
  'color': 'green'
}, {
  'cx': 70,
  'cy': 70,
  'radius': 20,
  'color': 'purple'
}];


var rectangleData = [{
  'rx': 110,
  'ry': 110,
  'height': 30,
  'width': 30,
  'color': 'blue'
}, {
  'rx': 160,
  'ry': 160,
  'height': 30,
  'width': 30,
  'color': 'red'
}];

var svgContainer = d3.select('#d3container').append('svg')
  .attr('width', 200)
  .attr('height', 200);

var circleGroup = svgContainer.append('g').attr('transform', 'translate(80,0)');

var circles = circleGroup.selectAll('circle')
  .data(circleData)
  .enter()
  .append('circle');

var circleAttributes = circles
  .attr('cx', function (d) {
    return d.cx;
  })
  .attr('cy', function (d) {
    return d.cy;
  })
  .attr('r', function (d) {
    return d.radius;
  })
  .style('fill', function (d) {
    return d.color;
  });

var rectangles = svgContainer.selectAll('rect')
  .data(rectangleData)
  .enter()
  .append('rect');

var rectangleAttributes = rectangles
  .attr('x', function (d) {
    return d.rx;
  })
  .attr('y', function (d) {
    return d.ry;
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

// https://www.dashingd3js.com/svg-text-element

/*
var circleData = [{
  'cx': 20,
  'cy': 20,
  'radius': 20,
  'color': 'green'
}, {
  'cx': 70,
  'cy': 70,
  'radius': 20,
  'color': 'purple'
}];

var svgContainer = d3.select('#d3container').append('svg')
  .attr('width', 200)
  .attr('height', 200);

var circles = svgContainer.selectAll('circle')
  .data(circleData)
  .enter()
  .append('circle');

var circleAttributes = circles
  .attr('cx', function (d) {
    return d.cx;
  })
  .attr('cy', function (d) {
    return d.cy;
  })
  .attr('r', function (d) {
    return d.radius;
  })
  .style('fill', function (d) {
    return d.color;
  });

var text = svgContainer.selectAll('text')
  .data(circleData)
  .enter()
  .append('text');

var textLabels = text
  .attr('x', function (d) {
    return d.cx;
  })
  .attr('y', function (d) {
    return d.cy;
  })
  .text(function (d) {
    return '( ' + d.cx + ', ' + d.cy + ' )';
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', '20px')
  .attr('fill', 'red');
*/

// https://www.dashingd3js.com/d3js-axes

/*
var svgContainer = d3.select('body').append('svg')
  .attr('width', 400)
  .attr('height', 100);

var axisScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, 400]);

var xAxis = d3.svg.axis()
  .scale(axisScale);

var xAxisGroup = svgContainer.append('g')
  .call(xAxis);
*/
