
export default class RateShow{
    constructor({ elementClass, max, icon = "star"}) {
        this._elemClass = elementClass;
        this._elemArr = Array.from(document.querySelectorAll(this._elemClass));
        this._maxGrades = max;
        this._icon = icon;            

        this._render();
    }

    _render() {
        this._elemArr.forEach((item) => {
            let value = item.getAttribute('value');

            for (let i = 0; i < value; i++) {
                let elemIcon = `<span value='${i + 1}'>${this._icon}</span>`
                item.innerHTML += elemIcon;
            }
            for (let i = 0; i < (this._maxGrades - value); i++) {
                    let elemIcon = `<span value='${i+1}'>${this._icon}_border</span>`
                    item.innerHTML += elemIcon;
            }
        })
    }
}