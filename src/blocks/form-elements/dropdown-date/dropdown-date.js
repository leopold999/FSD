$(".dropdown-date__input").mask("99.99.9999");

let elemsDropdownDate = document.querySelectorAll('.dropdown-date');

for (let elem of elemsDropdownDate) {
    let checkbox = elem.querySelector('.dropdown-date__list-checkbox');
    

    if (checkbox) {
        checkbox.addEventListener('click', e => {
            let datepicker = document.querySelector('.datepicker');
            if (datepicker.style.display == 'none') {
                $('.calendar').datepicker().data('datepicker').show();
            } else if (datepicker.style.display == 'block') {
                $('.calendar').datepicker().data('datepicker').hide();
            }
        })  
    }
    
    
}




