
let elemSearchRoomDate = document.querySelector('.search-rooms');
let elemsDropdownDate;
let elemCalendar;

if (elemSearchRoomDate) {
    elemsDropdownDate = elemSearchRoomDate.querySelectorAll('.dropdown-date');
    elemCalendar = elemSearchRoomDate.querySelector('.search-rooms-calendar');

    for (let elem of elemsDropdownDate) {
        let checkbox = elem.querySelector('.dropdown-date__list-checkbox');

        if (checkbox) {
            checkbox.addEventListener('click', e => {
                let datepicker = elemSearchRoomDate.querySelector('.datepicker');
                if (datepicker.style.display == 'none') {
                    $(elemCalendar).datepicker().data('datepicker').show();
                } else if (datepicker.style.display == 'block') {
                    $(elemCalendar).datepicker().data('datepicker').hide();
                }
            })  
        }
    }

    $(elemCalendar).datepicker({
        inline: true,
        range: true,
        multipleDates: true,
        onSelect: function(formattedDate, date, inst) {
            let dateArr = formattedDate.split(',');
            let cardsElem = document.querySelector('.search-rooms');
            let inputArrivalDate = cardsElem.querySelector('.arrival-date');
            let inpuDepartureDate = cardsElem.querySelector('.departure-date');
            
            if (date.length === 0) {
                inputArrivalDate.value = '';
                inpuDepartureDate.value = '';
            } else if (date.length === 1) {
                inputArrivalDate.value = dateArr[0];
                inpuDepartureDate.value = '';
            } else if (date.length === 2) {
                inputArrivalDate.value = dateArr[0];
                inpuDepartureDate.value = dateArr[1];
            } 
        },
        dateFormat: "dd.mm.yyyy",
        minDate: new Date(),
        clearButton: true
    })



    $(elemCalendar).datepicker().data('datepicker').hide();
}



    






        

