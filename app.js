// Logic
function result() {
  const toggleAble = document.querySelector('.fa-angle-down');
  toggleAble.classList.toggle('fa-angle-up');
}

// Arrow click
document.querySelector('.fa-angle-down').addEventListener('click', result);

