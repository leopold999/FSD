
export default class RateButton {
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
            for (let j = 0; j < this._maxGrades; j++) {
                    let elemIcon = `<div class=${this._conteinerElementClass + '__item'} value='${j+1}'>${this._icon}_border</div>`
                    item.innerHTML += elemIcon;
            }
            let name = item.getAttribute('data-name');
            item.innerHTML += `<input type="hidden" name="${name}" value="0"/>`;
            item.addEventListener("click", e => {
                let elemSpan = e.target;
                this._setRating(elemSpan, 0);
                let elemArr = [...elemSpan.closest(this._elemClass).querySelectorAll('div')];
                let rating = elemArr.indexOf(elemSpan) + 1;
                elemSpan.closest(this._elemClass).querySelector('input').setAttribute('value', rating)
            });
            item.addEventListener("mouseover", e => {
                let elemSpan = e.target;
                this._showRating(elemSpan, 0)
            });
            item.addEventListener("mouseleave", e => {
                let elemSpan = e.target;
                let rating = elemSpan.closest(this._elemClass).querySelector('input').getAttribute('value');
                this._showRating(elemSpan, rating)
            });
        })
    }

    _showRating(elem, numRating) {
        let elemArr = [...elem.closest(this._elemClass).querySelectorAll('div')];
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