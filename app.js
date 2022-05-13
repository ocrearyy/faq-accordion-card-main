function myFunction() {
  let x = document.querySelector('#answer1');
  const boldText = document.querySelector('.light1');
  const toggleAble = document.querySelector('.a');

  if (x.style.display === "none") {
    x.style.display = "block";
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = "none";
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');  } 

}

function myFunction2() {
  let x = document.querySelector('#answer2');
  const boldText = document.querySelector('.light2');
  const toggleAble = document.querySelector('.b');

   if (x.style.display === "none" && toggleAble.id === 'down-arrow2') {
    x.style.display = "block";
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = "none";
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');  } 
  }


function myFunction3() {
  let x = document.querySelector('#answer3');
  const boldText = document.querySelector('.light3');
  const toggleAble = document.querySelector('.c');

   if (x.style.display === "none" && toggleAble.id === 'down-arrow3') {
    x.style.display = "block";
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = "none";
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');  } 
  }



function myFunction4() {
  let x = document.querySelector('#answer4');
  const boldText = document.querySelector('.light4');
  const toggleAble = document.querySelector('.d');

   if (x.style.display === "none" && toggleAble.id === 'down-arrow4') {
    x.style.display = "block";
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = "none";
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');  } 
  }


function myFunction5() {
  let x = document.querySelector('#answer5');
  const boldText = document.querySelector('.light5');
  const toggleAble = document.querySelector('.e');

   if (x.style.display === "none" && toggleAble.id === 'down-arrow5') {
    x.style.display = "block";
    toggleAble.classList.add('fa-angle-up');
    boldText.style.fontWeight = 'bold';
  } else {
    x.style.display = "none";
    boldText.style.fontWeight = 'normal';
    toggleAble.classList.remove('fa-angle-up');  } 
  }

// // Logic
// function result1() {
//   const toggleAble = document.querySelector('.a');
//   const boldText = document.querySelector('.light1');
//   const answer1 = document.querySelector('#answer1');
//   const removeAnswer1 = document.querySelector('#answer1');


//   if (toggleAble.id === 'down-arrow1') {
//     toggleAble.classList.toggle('fa-angle-up');
//     boldText.style.fontWeight = 'bold';
//     answer1.textContent = 'You can invite up to 2 additional users on the Free plan.You can invite up to 2 additional users on the Free plan.'
//   } else if (removeAnswer1.id === '#answer1') {
//     remove(removeAnswer1)
//   }
// } 

// function result2() {
//   const toggleAble = document.querySelector('.b');
//   const boldText = document.querySelector('.light2');
//   const answer2 = document.querySelector('#answer2');

//   if (toggleAble.id === 'down-arrow2') {
//     toggleAble.classList.toggle('fa-angle-up');
//     boldText.style.fontWeight = 'bold';
//     answer2.textContent = 'No more than 2GB. All files in your account must fit your allotted storage space.'
//   }
// }

// function result3() {
//   const toggleAble = document.querySelector('.c');
//   const boldText = document.querySelector('.light3');
//   const answer3 = document.querySelector('#answer3');

//   if (toggleAble.id === 'down-arrow3') {
//     toggleAble.classList.toggle('fa-angle-up');
//     boldText.style.fontWeight = 'bold';
//     answer3.textContent = 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
//   } 
// }

// function result4() {
//   const toggleAble = document.querySelector('.d');
//   const boldText = document.querySelector('.light4');
//   const answer4 = document.querySelector('#answer4');
  
//   if (toggleAble.id === 'down-arrow4') {
//     toggleAble.classList.toggle('fa-angle-up');
//     boldText.style.fontWeight = 'bold';
//     answer4.textContent = 'Yes! Send us a message and we’ll process your request no questions asked.'
//   }
// }

// function result5() {
//   const toggleAble = document.querySelector('.e');
//   const boldText = document.querySelector('.light5');
//   const answer5 = document.querySelector('#answer5');

//   if (toggleAble.id === 'down-arrow5') {
//     toggleAble.classList.toggle('fa-angle-up');
//     boldText.style.fontWeight = 'bold';
//     answer5.textContent = 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
//   }
// }

// // Arrow click
// // FAQ 1
// const arrowIcon1 = document.querySelector('.a');
// arrowIcon1.addEventListener('click', result1);

// // FAQ 2
// const arrowIcon2 = document.querySelector('.b');
// arrowIcon2.addEventListener('click', result2);

// // FAQ 3
// const arrowIcon3 = document.querySelector('.c');
// arrowIcon3.addEventListener('click', result3);

// // FAQ 2
// const arrowIcon4 = document.querySelector('.d');
// arrowIcon4.addEventListener('click', result4);

// // FAQ 2
// const arrowIcon5 = document.querySelector('.e');
// arrowIcon5.addEventListener('click', result5);