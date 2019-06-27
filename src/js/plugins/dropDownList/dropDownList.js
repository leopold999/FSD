export default class dropDounList {
    constructor({ elem, itemsNames, defaultValue, dataNames, alternateNames, showDropdownButtons, inputCallback }) {
        if (!elem) return;
        
        this._elem = elem;
        this._itemsNames = itemsNames;
        this._defaultValue = defaultValue || '';
        this._values = new Array(this._itemsNames.length).fill(0);
        this._dataNames = dataNames;
        this._alternateNames = alternateNames;
        this._elemWidth =  this._elem.offsetWidth;
       
        window.addEventListener('resize', () => {
            this._elemWidth = this._elem.offsetWidth;
            this._elemDropdownList.style.width = this._elemWidth + 'px';
        })

        this._inputCallback = inputCallback;
        this._showDropdownButtons = showDropdownButtons || false;
        this._elemCheckboxLabel = this._elem.querySelector('.dropdown__list-checkbox');
        this._elemCheckboxDropdown = this._elem.querySelector('.dropdown__checkbox-input');
        this._elemDropdownList = document.createElement('div');
        this._elemDropdownList.classList.add('dropdown-list');
        this._elemDropdownList.classList.add('dropdown-list_hide');
        this._elemDropdownList.style.width = this._elemWidth + 'px';
        this._elem.append(this._elemDropdownList)
        this._elemInput = this._elem.querySelector('.dropdown__input'); 
        this._render();
        this._dataInput();
        this._changeValue();
        this._dropDownListHide();
        this._dropDownButtons = this._elemDropdownList.querySelector('.dropdown-list-buttons');
        this._showDropdownlistButtons();
        this._elemCleanButton = this._dropDownButtons.querySelector('.dropdown-list-buttons__clean-button');
        this._elemCleanButton.addEventListener('click', () => {
            this._dropDownListClean();
        });
        this._elemApplyButton = this._dropDownButtons.querySelector('.dropdown-list-buttons__apply-button');
        this._elemApplyButton.addEventListener('click', () => {
            this._elemDropdownList.classList.add('dropdown-list_hide');
        });
        this._showCleanButton();
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
            <div class='dropdown-list-buttons'>
                <span class='button button_type_clean-gray dropdown-list-buttons__clean-button'>Очистить</span>
                <span class='button button_type_clean dropdown-list-buttons__apply-button'>Применить</span>
            </div>
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
                    this._dropDownListClean();
                }
                this._dataInput(); 
                this._showCleanButton();
            }
        })      
    }

    _dropDownListClean() {
        let elemdropdownItemAll = this._elemDropdownList.querySelectorAll('.dropdown-list-item');    
        this._values.fill(0);
        for (let elem of elemdropdownItemAll) {
            elem.querySelector('.counter__value').innerHTML = 0;
            elem.querySelector('.counter__button_minus').classList.add('counter__button_transparent');
            elem.querySelector('.counter__button_plus').classList.remove('counter__button_transparent');
        }    

        this._dataInput();
        this._showCleanButton();
    }

    _dropDownListHide() {
        
        this._elemCheckboxDropdown.addEventListener('click', e => {
            if (e.target.closest('.dropdown__checkbox-input')) {
                this._elemDropdownList.classList.toggle('dropdown-list_hide');
                this._elemInput.classList.toggle('dropdown__input_show-dropdown-list');
                this._elemCheckboxLabel.classList.toggle('dropdown__list-checkbox_checked');
            }
        })
        this._elemDropdownList.addEventListener('mouseleave', e => {
            
            if (e.target.closest('.dropdown-list') && !e.relatedTarget.closest('.dropdown')) {
                this._elemDropdownList.classList.add('dropdown-list_hide');
                this._elemInput.classList.remove('dropdown__input_show-dropdown-list');
                this._elemCheckboxLabel.classList.remove('dropdown__list-checkbox_checked');
            }
        })
    }
    _showDropdownlistButtons() {
        if (this._showDropdownButtons) {

            this._dropDownButtons.classList.remove('dropdown-list-buttons_hide');

        } else {
            this._dropDownButtons.classList.add('dropdown-list-buttons_hide');
        }
    }

    _showCleanButton() {
        if (this._values[0] === 0) {
            this._elemCleanButton.style.display = 'none';
        } else {
            this._elemCleanButton.style.display = 'block';
        }
    }
}

