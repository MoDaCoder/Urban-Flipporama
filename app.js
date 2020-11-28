document.addEventListener('DOMContentLoaded', () => {

    //card options-
    const cardArray = [
        {
            name: 'borb',
            img: 'images/borb.png'
        },
        {
            name: 'borb',
            img: 'images/borb.png'
        },
        {
            name: 'fishbowl',
            img: 'images/fishbowl.png'
        },
        {
            name: 'fishbowl',
            img: 'images/fishbowl.png'
        },
        {
            name: 'food',
            img: 'images/food.png'
        },
        {
            name: 'food',
            img: 'images/food.png'
        },        
        {
            name: 'french_hat',
            img: 'images/french_hat.png'
        },
        {
            name: 'french_hat',
            img: 'images/french_hat.png'
        },
        {
            name: 'garfield',
            img: 'images/garfield.png'
        },
        {
            name: 'garfield',
            img: 'images/garfield.png'
        },
        {
            name: 'llama',
            img: 'images/llama.png'
        },        
        {
            name: 'llama',
            img: 'images/llama.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'snail',
            img: 'images/snail.png'
        },        
        {
            name: 'snail',
            img: 'images/snail.png'
        }
    ]

const grid = document.querySelector('.grid')
//creating board
//using for loop to iterate through card array and adding an img element to it
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/pikachu.png')
      card.setAttribute('data-id', i)
    //   card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}
createBoard()

})