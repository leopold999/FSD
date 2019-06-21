
import donutChart from '../../../js/plugins/donutChart/donutChart';

new donutChart({
    elem: document.querySelector('.donut-chart'),
    width: 120,
    height: 120,
    margin: 5,
    data: {'great': 520,'good': 260, 'normal': 260, 'bad':1}
   
})


// var width = 120;
// var height = 120;
// var margin = 5;
// var data = {'Великолепно': 520,'Хорошо': 260, 'Удовлетворительно':  260,  'Разочарован':0};
// //colors
// // let dataGradients = [
// //   ['#FFE39C', '#FFBA9C'],
// //   ['#BC9CFF', '#8BA4F9'],
// //   ['#6FCF97', '#66D2EA'],
// //   ['#919191', '#3D4975']
// // ];


// let elemPie = document.getElementById('my_dataviz');

// // The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
// var radius = Math.min(width, height) / 2 - margin

// // append the svg object to the div called 'my_dataviz'
// var svg = d3.select(elemPie)
//   .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  

// let elemSVG = elemPie.querySelector('svg');
// elemSVG.style.transform = 'rotate(180deg)';


// // let elemDefs = document.createElement('defs');


// // elemDefs.innerHTML = `
// //   ${dataGradients.map( (item, i) => `
// //     <linearGradient id="grad-${i}" x1="0" x2="0" y1="0" y2="1">
// //       <stop stop-color=${item[0]} offset="0%"></stop>
// //       <stop stop-color=${item[1]} offset="100%"></stop>
// //     </linearGradient>    
// //     `  
// //   ).join('')}
// // `;

// // elemSVG.prepend(elemDefs);


// // Create dummy data


// // set the color scale
// // var color = d3.scaleOrdinal()
// //   .domain(data)
//   // .range(["url(#grad_1)", "purple", "green",  "gray"])

// // Compute the position of each group on the pie:
// var pie = d3.pie()
//   .value(function(d) {return d.value; })
// var data_ready = pie(d3.entries(data))

// // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
// svg
//   .selectAll('whatever')
//   .data(data_ready)
//   .enter()
//   .append('path')
//   .attr('fill', function(d){ 
    
//     return `url(#grad-${d.index})`
//     // return `red`    
//   })
//   // .attr('name', function(d){ return(d.data.key) } )
//   .attr('value', function(d){ return(d.data.value) } )
//   .attr('d', d3.arc()
//     .innerRadius(100)         // This is the size of the donut hole
//     .outerRadius(radius)
//   )
//   .attr("stroke", "#ffffff")
//   .style("stroke-width", "2px")
//   .style("opacity", 1)
 

// elemPie.addEventListener('mouseover', e => {
//   if (e.target.closest('path')) {
//     e.target.style.transform = 'scale(0.9)'
//   }
  
// })
// elemPie.addEventListener('mouseout', e => {
//   if (e.target.closest('path')) {
//     e.target.style.transform = 'scale(1)'
//   }
  
// })



