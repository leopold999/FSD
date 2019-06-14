// $('.calendar').datepicker({
//     inline: true,
//     range: true,
//     multipleDates: true,
//     onSelect: function(formattedDate, date, inst) {
//         let dateArr = formattedDate.split(',');
//         let cardsElem = document.querySelector('.search-rooms');
//         let inputArrivalDate = cardsElem.querySelector('.arrival-date');
//         let inpuDepartureDate = cardsElem.querySelector('.departure-date');
        
//         if (date.length === 0) {
//             inputArrivalDate.value = '';
//             inpuDepartureDate.value = '';
//         } else if (date.length === 1) {
//             inputArrivalDate.value = dateArr[0];
//             inpuDepartureDate.value = '';
//         } else if (date.length === 2) {
//             inputArrivalDate.value = dateArr[0];
//             inpuDepartureDate.value = dateArr[1];
//         } 
//     },
//     dateFormat: "dd.mm.yyyy",
//     minDate: new Date(),
//     clearButton: true
// })


// // Доступ к экземпляру объекта
// var myDatepicker = $('.calendar').datepicker().data('datepicker');
// // console.log(myDatepicker)
// myDatepicker.hide();
// // myDatepicker.show();
// // let but = document.querySelector('.but');
// // console.log(but)

// // but.addEventListener('click', e => {

// //     console.log(myDatepicker.selectedDates);
// // })


        