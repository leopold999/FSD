
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
            console.log(item)
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

    _showRating(elem, numRating) {
        let elemArr = [...elem.closest(this._elemClass).querySelectorAll('span')];
        let elemNumber = elem.getAttribute('value');
        let elemInput = elem.closest(this._elemClass).querySelector('input');
        elemInput.setAttribute('data-number', elemNumber)
        let tempRating = numRating || elemInput.getAttribute('data-number');

        for (let i = 0; i < this._maxGrades; i++) {
            let icon = this._icon + "_border";

            if (i < tempRating) {
                icon = this._icon;
            }
            elemArr[i].innerHTML = icon;
        }
    }
    _setRating(elem, numRating) {
        this._showRating(elem, numRating)
    }
}