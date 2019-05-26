$.fn.digitalMask = function() {
    
    return this.each(function() {
        let text = $(this).text().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        $(this).text(text)
    })
}

