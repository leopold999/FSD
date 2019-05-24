export default class DropButton{
    constructor({ buttonElemClass, showElemClass}) {
        this._buttonElemClass = buttonElemClass;
        this._showElemClass = showElemClass;
        this._buttonElemArr = Array.from(document.querySelectorAll(this._buttonElemClass));
      
        
        this._hide();
    }

    _hide() {
        this._buttonElemArr.forEach((item) => {
            item.addEventListener('click', e => {
                // let elemInput = e.target.querySelector('input');
                console.log(e.target.checked)
            })


        })
     

        
    }

    
}