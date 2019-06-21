import * as d3 from "../../../js/plugins/d3/d3";

export default class donutChart {
    constructor({ elem, width, height, margin, data}) {
        if (!elem) return;
        this._elem = elem;
        this._width = width;
        this._height = height;
        this._margin = margin;
        this._data = data;
        this._radius = Math.min(this._width, this._height) / 2 - this._margin;
        this._elemText = this._elem.querySelector('.donut-chart__text');
        this._elemTextValue = this._elemText.querySelector('.donut-chart__amount');
        

        this._render();

        this._elem.addEventListener('mouseover', e => {
            if (e.target.closest('path')) {
                let value = e.target.getAttribute('data-value');
                let index = e.target.getAttribute('data-index');
                this._elemTextValue.innerHTML = value;
                e.target.style.transform = 'scale(0.9)';
                this._elemText.style.display = 'block';
                this._elemText.classList.add('donut-chart-gradient-text-' + index)
            }
            
          })
         this._elem.addEventListener('mouseout', e => {
            if (e.target.closest('path')) {
                let index = e.target.getAttribute('data-index');
                e.target.style.transform = 'scale(1)'
                this._elemText.style.display = 'none';
                this._elemText.classList.remove('donut-chart-gradient-text-' + index);
            }
          })
          
    }
    _render() {
        
        this._svg = d3.select(this._elem)
            .append("svg")
                .attr("width", this._width)
                .attr("height", this._height)
            .append("g")
                .attr("transform", "translate(" + this._width / 2 + "," + this._height / 2 + ")");
        this._elemSVG = this._elem.querySelector('svg');
        this._elemSVG.style.transform = 'rotate(180deg)';

        this._pie = d3.pie()
            .value(function(d) {return d.value; })
        this._data_ready = this._pie(d3.entries(this._data))

        this._svg
            .selectAll('whatever')
            .data(this._data_ready)
            .enter()
            .append('path')
            .attr('fill', function(d){ 
                
                return `url(#lineargradient-${d.index})`
                // return `red`    
            })
            // .attr('name', function(d){ return(d.data.key) } )
            .attr('data-value', function(d){ return(d.data.value) } )
            .attr('data-index', function(d){ return(d.index) } )
            .attr('d', d3.arc()
                .innerRadius(100)         // This is the size of the donut hole
                .outerRadius(this._radius)
            )
            .attr("stroke", "#ffffff")
            .style("stroke-width", "2px")
            .style("opacity", 1)
    }
}