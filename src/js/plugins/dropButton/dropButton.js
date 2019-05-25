/*
Класс для 

new DropButton({
    parentElemClass: 'expandable-checkbox', -- Элемент контейнер 
    buttonElemClass: 'expandable-checkbox__button', -- button
    showElemClass: 'expandable-checkbox-list', -- элемент который необходимо прятать
    hideClass: 'expandable-checkbox-list_hide' -- класс, который прячет элемент
})*/

export default class DropButton{
    constructor({ parentElemClass, buttonElemClass, showElemClass, hideClass}) {
        this._buttonElemClass = '.' + buttonElemClass;
        this._parentElemClass = '.' + parentElemClass;
        this._showElemClass = '.' + showElemClass;
        this._hideClass = hideClass;
        this._buttonElemArr = Array.from(document.querySelectorAll(this._buttonElemClass));
    
        this._hide();
    }

    _hide() {
        this._buttonElemArr.forEach((item) => {
            item.addEventListener('click', e => {
                let elemInput = e.target.closest('input');
                let parentElem = elemInput.closest(this._parentElemClass);
                let showElem = parentElem.querySelector(this._showElemClass);
      
                if (elemInput.checked) {
                    showElem.classList.remove(this._hideClass);
                } 
                else{
                    showElem.classList.add(this._hideClass);
                }
            })
        })  
    }
}