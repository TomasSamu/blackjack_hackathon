 class Hand {
    constructor(){
        this.score = 0;
    }

/* this.score = card.value;
console.log(this.score); */

addCards(value){

this.score += value;
document.querySelector('#handscore').textContent = this.score /* {
    if this.score > 21 {
        .textContent = "BUSTED";
    }else {
        return this.score
    }
} */ ;
console.log(value);
}

}