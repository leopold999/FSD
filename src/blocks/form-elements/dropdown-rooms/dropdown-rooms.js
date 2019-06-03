import dropDownList from '../../../js/plugins/dropDownList/dropDownList';

let dropDownListRooms = new dropDownList({
    elem: document.querySelector('.dropdown-rooms'),
    itemsNames: ['Спальни', 'Кровати', 'Ванные комнаты'],
    dataNames: ['bedrooms', 'beds', 'bathrooms' ],
    alternateNames: [['спальня', 'спальни'], ['кровать', 'кровати'], ['ванная комната', 'ванные комнаты']], 
    classModifier: 'dropdown_size_medium',
    defaultValue: '',
    inputCallback: (itemsNames, values, alternateNames) => {
        let textInputArr = [];
        for (let i = 0; i <= itemsNames.length; i++) {
            if (values[i] == 1) {
                textInputArr.push(1 + ' ' + alternateNames[i][0]);
            } else if (values[i] > 1 && values[i] <= 4) {
                textInputArr.push(values[i] + ' ' + alternateNames[i][1]);
            } 
        }

        let textInput = textInputArr.join(', ');

        if (textInputArr.length) {
            textInput += '...'
        }

        return textInput;
    }
 
})



