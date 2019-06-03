export default class dropDounList {
    constructor({ elem, itemsNames, classModifier, defaultValue, dataNames, alternateNames, inputCallback }) {
        this._elem = elem;
        this._itemsNames = itemsNames;
        this._defaultValue = defaultValue;
        this._values = new Array(this._itemsNames.length).fill(0);
        this._dataNames = dataNames;
        this._alternateNames = alternateNames;
        this._classModifier = classModifier;
        this._classModifier;
        this._inputCallback = inputCallback;

        this._elemDropdownList = document.createElement('div');
        this._elemDropdownList.classList.add('dropdown-list');
        this._elemDropdownList.classList.add('dropdown-list_hide');
        this._elemDropdownList.classList.add(this._classModifier);
        this._elem.after(this._elemDropdownList)

        this._elemInput = this._elem.querySelector('.dropdown__input');    

        this._render();

        this._dataInput();

        this._changeValue();

        this._dropDownListHide();
    }

    _render() {
        this._elemDropdownList.innerHTML = `
            ${this._itemsNames.map((item, i) => `
                <div class='dropdown-list-item' data-name=${this._dataNames[i]} data-value=${this._values[i]}>
                    <span class='dropdown-list-item__title'>${item}</span>
                    <div class='counter'>
                        <div class='counter__button counter__button_minus counter__button_transparent' data-sign='minus'>-</div>
                        <span class='counter__value'>${this._values[i]}</span>
                        <div class='counter__button counter__button_plus' data-sign='plus'>+</div>
                    </div>
                </div>
            `).join('')}     
        `;
    }

    _dataInput() {
        if (this._inputCallback) {
            if (this._values[0] === 0) {
                this._elemInput.setAttribute('value',  this._defaultValue); 
            } else {
                this._elemInput.setAttribute('value',  this._inputCallback(this._itemsNames, this._values, this._alternateNames));
            }

            
        }
        
    }

    _changeValue() {
        this._elemDropdownList.addEventListener('click', e => {
            if (e.target.closest('.counter__button')) {              
                let dataName = e.target.closest('.dropdown-list-item').getAttribute('data-name');
                let value = this._values[this._dataNames.indexOf(dataName)];
                let operation = e.target.getAttribute('data-sign');
                let elemCounterValue = e.target.closest('.dropdown-list-item').querySelector('.counter__value');
                let elemdropdownItemAll = this._elemDropdownList.querySelectorAll('.dropdown-list-item');             

                if (this._values[0] === 0 && dataName != this._dataNames[0]) return false;

                if (operation === 'plus' && value < 4) {
                    this._values[this._dataNames.indexOf(dataName)] += 1;
                }
                if (operation === 'minus' && value > 0) {
                    this._values[this._dataNames.indexOf(dataName)] -= 1;
                }
                if (this._values[this._dataNames.indexOf(dataName)] == 0) {
                    let elemCounterButtonMinus = e.target.closest('.counter').querySelector('.counter__button_minus');
                    elemCounterButtonMinus.classList.add('counter__button_transparent');
                }
                if (this._values[this._dataNames.indexOf(dataName)] > 0) {
                    let elemCounterButtonMinus = e.target.closest('.counter').querySelector('.counter__button_minus');
                    elemCounterButtonMinus.classList.remove('counter__button_transparent');
                }
                if (this._values[this._dataNames.indexOf(dataName)] > 0) {
                    let elemCounterButtonPlus = e.target.closest('.counter').querySelector('.counter__button_plus');
                    elemCounterButtonPlus.classList.remove('counter__button_transparent');
                }
                if (this._values[this._dataNames.indexOf(dataName)] >= 4) {
                    let elemCounterButtonPlus = e.target.closest('.counter').querySelector('.counter__button_plus');
                    elemCounterButtonPlus.classList.add('counter__button_transparent');
                }

                elemCounterValue.innerHTML = this._values[this._dataNames.indexOf(dataName)];
                
                if (this._values[0] === 0) {
                    this._values.fill(0);
                    for (let elem of elemdropdownItemAll) {
                        elem.querySelector('.counter__value').innerHTML = 0;
                        elem.querySelector('.counter__button_minus').classList.add('counter__button_transparent');
                        elem.querySelector('.counter__button_plus').classList.remove('counter__button_transparent');
                    }                    
                }
                           
                this._dataInput();
            }
        })      
    }

    _dropDownListHide() {
        this._elemCheckboxDropdown = this._elem.querySelector('.dropdown__checkbox-input');
        this._elemCheckboxDropdown.addEventListener('click', e => {
            if (e.target.closest('.dropdown__checkbox-input')) {
                this._elemDropdownList.classList.toggle('dropdown-list_hide');
            }
        })
        this._elemDropdownList.addEventListener('mouseleave', e => {
            
            if (e.target.closest('.dropdown-list') && !e.relatedTarget.closest('.dropdown')) {
                this._elemDropdownList.classList.add('dropdown-list_hide');
            }
        })
    }
}

