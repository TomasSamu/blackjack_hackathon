/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.value;
    } 
    
assignNum(){
  switch (this.rank){
    case 'jack':
    case 'queen':
    case 'king':
      this.value = 10;
      break;
    case 'ace':
      this.value = 11;
      break;
    default:
      this.value = parseInt(this.rank);
      break;
    }

return this.value;

}

  render(){
    this.assignNum();
    this.element = document.createElement('div');
    this.element.className = `card face-${this.rank}-of-${this.suit}`
   return this.element;

  }

  mount(parent){
    parent.appendChild(this.render());
  }


} 