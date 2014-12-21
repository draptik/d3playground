// http://bl.ocks.org/mccannf/1629464

var w = 750,
  h = 450,
  r = 120;

var width = 300,
  height = 200,
  dragbarw = 20;

var drag = d3.behavior.drag()
  .origin(Object)
  .on('drag', dragmove);

var dragtop = d3.behavior.drag()
  .origin(Object)
  .on('drag', tdragresize);

var dragbottom = d3.behavior.drag()
  .origin(Object)
  .on('drag', bdragresize);

var svg = d3.select('#dragdiv').append('svg')
  .attr('width', w)
  .attr('height', h)
  .style('border', '1px solid black');

var newg = svg.append('g')
  .data([{
    x: width / 2,
    y: height / 2
  }]);

var dragrect = newg.append('rect')
  .attr('id', 'active')
  .attr('x', function (d) {
    return d.x;
  })
  .attr('y', function (d) {
    return d.y;
  })
  .attr('height', height)
  .attr('width', width)
  .attr('fill-opacity', .5)
  .attr('cursor', 'move')
  .call(drag);

var dragbartop = newg.append('rect')
  .attr('x', function (d) {
    return d.x + (dragbarw / 2);
  })
  .attr('y', function (d) {
    return d.y - (dragbarw / 2);
  })
  .attr('height', dragbarw)
  .attr('id', 'dragleft')
  .attr('width', width - dragbarw)
  .attr('fill', 'lightgreen')
  .attr('fill-opacity', .5)
  .attr('cursor', 'ns-resize')
  .call(dragtop);

var dragbarbottom = newg.append('rect')
  .attr('x', function (d) {
    return d.x + (dragbarw / 2);
  })
  .attr('y', function (d) {
    return d.y + height - (dragbarw / 2);
  })
  .attr('id', 'dragright')
  .attr('height', dragbarw)
  .attr('width', width - dragbarw)
  .attr('fill', 'lightgreen')
  .attr('fill-opacity', .5)
  .attr('cursor', 'ns-resize')
  .call(dragbottom);

function dragmove(d) {
  dragrect
    .attr('y', d.y = Math.max(0, Math.min(h - height, d3.event.y)));
  dragbartop
    .attr('y', function (d) {
      return d.y - (dragbarw / 2);
    });
  dragbarbottom
    .attr('y', function (d) {
      return d.y + height - (dragbarw / 2);
    });
}

function tdragresize(d) {
  var oldy = d.y;
  //Max x on the right is x + width - dragbarw
  //Max x on the left is 0 - (dragbarw/2)
  d.y = Math.max(0, Math.min(d.y + height - (dragbarw / 2), d3.event.y));
  height = height + (oldy - d.y);
  dragbartop
    .attr('y', function (d) {
      return d.y - (dragbarw / 2);
    });

  dragrect
    .attr('y', function (d) {
      return d.y;
    })
    .attr('height', height);
}

function bdragresize(d) {
  //Max x on the left is x - width
  //Max x on the right is width of screen + (dragbarw/2)
  var dragy = Math.max(d.y + (dragbarw / 2), Math.min(h, d.y + height + d3.event.dy));

  //recalculate width
  height = dragy - d.y;

  //move the right drag handle
  dragbarbottom
    .attr('y', function (d) {
      return dragy - (dragbarw / 2)
    });

  //resize the drag rectangle
  dragrect
    .attr('height', height);
}
