$('.datapicker').datepicker({
    inline: true,
    range: true,
    multipleDates: true,
    onSelect: function(formattedDate, date, inst) {
        console.log(date)
    },
    clearButton: true

})

// Доступ к экземпляру объекта
var myDatepicker = $('.datapicker').datepicker().data('datepicker');
// myDatepicker.hide();

// let but = document.querySelector('.but');
// console.log(but)

// but.addEventListener('click', e => {

//     console.log(myDatepicker.selectedDates);
// })