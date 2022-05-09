// Logic
function result1() {
  const toggleAble = document.querySelector('.a');
  const boldText = document.querySelector('.light1');

  if (toggleAble.id === 'down-arrow1') {
    toggleAble.classList.toggle('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  }
}

function result2() {
  const toggleAble = document.querySelector('.b');
  const boldText = document.querySelector('.light2');

  if (toggleAble.id === 'down-arrow2') {
    toggleAble.classList.toggle('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  }
}

function result3() {
  const toggleAble = document.querySelector('.c');
  const boldText = document.querySelector('.light3');

  if (toggleAble.id === 'down-arrow3') {
    toggleAble.classList.toggle('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  }
}

function result4() {
  const toggleAble = document.querySelector('.d');
  const boldText = document.querySelector('.light4');

  if (toggleAble.id === 'down-arrow4') {
    toggleAble.classList.toggle('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  }
}

function result5() {
  const toggleAble = document.querySelector('.e');
  const boldText = document.querySelector('.light5');

  if (toggleAble.id === 'down-arrow5') {
    toggleAble.classList.toggle('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  }
}

// Arrow click
// FAQ 1
const arrowIcon1 = document.querySelector('.a');
arrowIcon1.addEventListener('click', result1);

// FAQ 2
const arrowIcon2 = document.querySelector('.b');
arrowIcon2.addEventListener('click', result2);

// FAQ 3
const arrowIcon3 = document.querySelector('.c');
arrowIcon3.addEventListener('click', result3);

// FAQ 2
const arrowIcon4 = document.querySelector('.d');
arrowIcon4.addEventListener('click', result4);

// FAQ 2
const arrowIcon5 = document.querySelector('.e');
arrowIcon5.addEventListener('click', result5);