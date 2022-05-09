// Logic
function result1() {
  const toggleAble = document.querySelector('.a');
  if (toggleAble.id === 'down-arrow1') {
    toggleAble.classList.toggle('fa-angle-up');
  }
}

function result2() {
  const toggleAble = document.querySelector('.b');
  if (toggleAble.id === 'down-arrow2') {
    toggleAble.classList.toggle('fa-angle-up');
  }
}

function result3() {
  const toggleAble = document.querySelector('.c');
  if (toggleAble.id === 'down-arrow3') {
    toggleAble.classList.toggle('fa-angle-up');
  }
}

function result4() {
  const toggleAble = document.querySelector('.d');
  if (toggleAble.id === 'down-arrow4') {
    toggleAble.classList.toggle('fa-angle-up');
  }
}

function result5() {
  const toggleAble = document.querySelector('.e');
  if (toggleAble.id === 'down-arrow5') {
    toggleAble.classList.toggle('fa-angle-up');
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