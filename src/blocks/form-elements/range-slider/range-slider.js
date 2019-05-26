(function($) {
    $(".ui-slider").slider({
        animate: "slow",
        range: true,    
        min: 200,
        max: 17200,
        step: 100,
        values: [ 5000, 10000],
        slide : function(event, ui) {    
            $(".range-slider_result").text((ui.values[ 0 ] + "\u20bd").replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + " - " + (ui.values[ 1 ] + "\u20bd").replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));    
            
        },
        
    });
    $( ".range-slider_result" ).text($(".ui-slider").slider("values", 0) + "\u20bd - " + $(".ui-slider").slider("values", 1) + "\u20bd");
    $( ".range-slider_result" ).digitalMask()
})(jQuery)

