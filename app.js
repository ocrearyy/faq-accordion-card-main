function myFunction() {
  const x = document.querySelector('#answer1');
  const boldText = document.querySelector('.light1');
  const toggleAble = document.querySelector('.a');

  if (x.style.display === 'none') {
    x.style.display = 'block';
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = 'none';
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');
  }
}

function myFunction2() {
  const x = document.querySelector('#answer2');
  const boldText = document.querySelector('.light2');
  const toggleAble = document.querySelector('.b');

  if (x.style.display === 'none' && toggleAble.id === 'down-arrow2') {
    x.style.display = 'block';
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = 'none';
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');
  }
}

function myFunction3() {
  const x = document.querySelector('#answer3');
  const boldText = document.querySelector('.light3');
  const toggleAble = document.querySelector('.c');

  if (x.style.display === 'none' && toggleAble.id === 'down-arrow3') {
    x.style.display = 'block';
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = 'none';
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');
  }
}

function myFunction4() {
  const x = document.querySelector('#answer4');
  const boldText = document.querySelector('.light4');
  const toggleAble = document.querySelector('.d');

  if (x.style.display === 'none' && toggleAble.id === 'down-arrow4') {
    x.style.display = 'block';
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = 'none';
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');
  }
}

function myFunction5() {
  const x = document.querySelector('#answer5');
  const boldText = document.querySelector('.light5');
  const toggleAble = document.querySelector('.e');

  if (x.style.display === 'none' && toggleAble.id === 'down-arrow5') {
    x.style.display = 'block';
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = 'none';
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');
  }
}

myFunction();
myFunction2();
myFunction3();
myFunction4();
myFunction5();
