const padlOrel = Math.random() < 0.5;

const vysledek = document.querySelector('.vysledek');
vysledek.textContent = 'Padl orel';

const minceElement = document.querySelector('.mince');

if (padlOrel) {
  vysledek.textContent = 'Padl orel';
  minceElement.classList.add('mince--orel');
} else {
  vysledek.textContent = 'Padla panna';
  minceElement.classList.add('mince--panna');
}
