let elemsFilterDate = document.querySelectorAll('.dropdown-filter-date');////
     

if (elemsFilterDate.length > 0) {

    for (let elem of elemsFilterDate) {
        let checkbox = elem.querySelector('.dropdown-filter-date__list-checkbox');
        let elemCalendar = elem.querySelector('.dropdown-filter-date__calendar');
        
        if (checkbox) {
            checkbox.addEventListener('click', e => {
                let datepicker = elem.querySelector('.datepicker');
                
                if (datepicker.style.display == 'none') {
                    $(elemCalendar).datepicker().data('datepicker').show();
                } else if (datepicker.style.display == 'block') {
                    $(elemCalendar).datepicker().data('datepicker').hide();
                }
            })  
        }

        $(elemCalendar).datepicker({
            inline: true,
            range: true,
            multipleDates: true,
            onSelect: function(formattedDate, date, inst) {
                let dateArr = formattedDate.split(',');
                let cardsElem = document.querySelector('.dropdown-filter-date');////
                let inputDate = cardsElem.querySelector('.dropdown-filter-date__input');
                 
                if (date.length === 0) {
                    inputDate.value = '';
            
                } else if (date.length === 1) {
                    inputDate.value = dateArr[0].toLowerCase();
               ;
                } else if (date.length === 2) {
                    inputDate.value = dateArr[0].toLowerCase() + " - " + dateArr[1].toLowerCase();  
                } 
            },
            dateFormat: "dd M",
            minDate: new Date(),
            clearButton: true
        })
    
        $(elemCalendar).datepicker().data('datepicker').hide();
    }
} 


















        

