let volume = 0;
const amount = document.querySelector('.volume');
const up = document.querySelector('.up-click');
const down = document.querySelector('.down-click');
const reset = document.querySelector('.reset');
const red = document.querySelector('.red');

const sprite_img = document.querySelector('.sprite_img');
const sprite_img2 = document.querySelector('.sprite_img2');

amount.textContent = volume;

up.addEventListener('click', function () {
  sprite_img.classList.add('ani');
  if (volume < 100) {
    volume++;
    red.style.height = `${100 + volume * 3}px`;
    amount.textContent = volume;
  }
  setTimeout(function () {
    sprite_img.classList.remove('ani');
  }, 1000);
});

down.addEventListener('click', function () {
  sprite_img2.style.visibility = 'visible';
  sprite_img2.classList.add('ani2');
  if (volume > 0) {
    volume--;
    red.style.height = `${100 + volume * 3}px`;
    amount.textContent = volume;
  }
  setTimeout(function () {
    sprite_img2.classList.remove('ani2');
    sprite_img2.style.visibility = 'hidden';
  }, 1000);
});

reset.addEventListener('click', function () {
  volume = 0;
  red.style.height = `${100 + volume * 3}px`;
  amount.textContent = volume;
});
