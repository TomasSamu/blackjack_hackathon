document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();

  const handDealer = new Hand();
  const handPlayer = new Hand();

  handDealer.hit()
  handPlayer.hit()

let dealerContainer = document.querySelector('#dealerCard');

 const card = deck.hit()
  card.mount(dealerContainer);

let playerContainer = document.querySelector('#playerCard');

  let hitButton = document.querySelector('.js-hit')
  hitButton.addEventListener('click', () => {

    const card = deck.hit()
    card.mount(playerContainer);

  })

});