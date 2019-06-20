import dropDownList from '../../../js/plugins/dropDownList/dropDownList';

let dropdownGuestsElements = document.querySelectorAll('.dropdown-guests');
for (let elem of dropdownGuestsElements) {

    let dropdownGuests = new dropDownList({
        elem: elem,
        itemsNames: ['Взрослые', 'Дети', 'Младенцы'],
        dataNames: ['Ages', 'Kids', 'babyes' ],
        alternateNames: [['гость', 'гостя', 'гостей'], ['гость', 'гостя', 'гостей'], ['младенец', 'младенца']], 
        // classModifier: 'dropdown_size_medium',
        defaultValue: 'Сколько гостей',
        showDropdownButtons: true,
        inputCallback: (itemsNames, values, alternateNames) => {
            let textInputArr = [];
            let numberGuests = values[0] + values[1];
            let numberBabies = values[2];
            
            if (numberGuests === 1) {
                textInputArr[0] = 1 + ' ' + alternateNames[0][0];
            } else if (numberGuests > 1 && numberGuests < 5) {
                textInputArr[0] = numberGuests + ' ' + alternateNames[0][1];
            } else if (numberGuests >= 5 && numberGuests <= 10) {
                textInputArr[0] = numberGuests + ' ' + alternateNames[0][2];
            }
    
            if (numberBabies === 1) {
                textInputArr[1] = 1 + ' ' + alternateNames[2][0];
            } else if (numberBabies > 1 && numberBabies < 5) {
                textInputArr[1] = numberBabies + ' ' + alternateNames[2][1];
            } 
           
            let textInput = textInputArr.join(', ');
    
            return textInput;
        }
    })

}



