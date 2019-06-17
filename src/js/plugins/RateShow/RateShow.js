
export default class RateShow{
    constructor({ conteinerElementClass, max, icon = "star"}) {
        this._conteinerElementClass = conteinerElementClass;
        this._elemClass = '.' + this._conteinerElementClass;
        
        this._elemArr = Array.from(document.querySelectorAll(this._elemClass));
        this._maxGrades = max;
        this._icon = icon;            

        this._render();
    }

    _render() {
        this._elemArr.forEach((item) => {
            let value = item.getAttribute('value');

            for (let i = 0; i < value; i++) {
                let elemIcon = `<div class=${this._conteinerElementClass + '__item'} value='${i + 1}'>${this._icon}</div>`
                item.innerHTML += elemIcon;
            }
            for (let i = 0; i < (this._maxGrades - value); i++) {
                    let elemIcon = `<div class=${this._conteinerElementClass + '__item'} value='${i+1}'>${this._icon}_border</div>`
                    item.innerHTML += elemIcon;
            }
        })
    }
}