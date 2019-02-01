document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();


  const handPlayer = new Hand([]);
  deck.hit('dealer');
/*  console.log(deck.hit('dealer')); */

  let hitButton = document.querySelector('.js-hit')
  hitButton.addEventListener('click', () => {

    const card = deck.hit('player');
  /*   console.log(card) */
    handPlayer.addCards(card.value)
    
  })

});