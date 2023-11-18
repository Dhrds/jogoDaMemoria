const grid = document.querySelector('.grid');

const characters = [
  'img/ariel.png',
  'img/bela.png',
  'img/branca-de-neve.png',
  'img/download.jpeg',
  'img/patrulha.png',
  'img/frozen.jpg',
  'img/Jasmine.png',
  'img/Princess_Pocahontas.png',
  'img/unicornio.webp',
  // 'img/wall.jpg',
  'img/Brinquedo.webp',
  
  ];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let primeiraEscolha = '';
let segundaEscolha = '';



const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    setTimeout(() => {
      alert('Parabéns!');
    }, 500);
    loadGame();
  }
};

const checkCards = () => {
  const firstCharacter = primeiraEscolha.getAttribute('data-character');
  const secondCharacter = segundaEscolha.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    primeiraEscolha.firstChild.classList.add('disabled-card');
    segundaEscolha.firstChild.classList.add('disabled-card');

    primeiraEscolha = '';
    segundaEscolha = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      primeiraEscolha.classList.remove('reveal-card');
      segundaEscolha.classList.remove('reveal-card');

      primeiraEscolha = '';
      segundaEscolha = '';

    }, 500);
  }

}

const revealCard = ({ target }) => {
  const card = target.parentNode;

  if (!card.classList.contains('reveal-card') && segundaEscolha === '') {
    card.classList.add('reveal-card');

    if (primeiraEscolha === '') {
      primeiraEscolha = card;
    } else {
      segundaEscolha = card;
      checkCards();
    }
  }
};

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('${character}')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {
  grid.innerHTML = '';

  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character, index) => {
    const card = createCard(character);

    grid.appendChild(card);
  });
};





window.onload = () => {
loadGame();
}
