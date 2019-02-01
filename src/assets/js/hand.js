 class Hand {
    constructor(){
        this.score = 0;
    }

/* this.score = card.value;
console.log(this.score); */

addCards(value){
const handScore = document.querySelector('#handscore')
this.score += value;

    if (this.score > 21) {
        handScore.textContent = 'BUSTED'
    }else {
        handScore.textContent = this.score
    }

return this.score
};

}
