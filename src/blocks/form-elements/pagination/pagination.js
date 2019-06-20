


let dataSource = [];
for (i = 1; i <= 170; i++) {
    dataSource.push(i)
}
let elem = document.querySelector('.pagination-container');

if (elem) {
    $(elem).pagination({
        dataSource:  dataSource,
        pageSize: 12,
        pageRange: 1,
        autoHidePrevious: true,
        autoHideNext: true,
        formatResult: function(data) {
            var result = [];
            for (var i = 0, len = data.length; i < len; i++) {
                result.push(data[i]);
            }
            return result;
        },
        callback: function(data, pagination) {
            if (!data) return;
            var html = simpleTemplating(data);
            $('#data-container').html(html);
            let numberOfObjects = dataSource.length;
            if (numberOfObjects > 100) {
                numberOfObjects = "100+";
            }
            let numStart = dataSource.indexOf(data[0]) + 1;
            let numEnd = numStart + data.length - 1;
            $('.pagination__text').text(numStart + " - " + numEnd + " из " + numberOfObjects + " вариантов аренды")
        }
    })
}



function simpleTemplating(data) {
    var html = '<ul>';
    $.each(data, function(index, item){
        html += '<li>'+ item +'</li>';
    });
    html += '</ul>'
    
    return html;
}

