//Arrow click 
document.querySelector('.fa-angle-down').addEventListener('click', result);

//Logic
function result() {
    let toggleAble = document.querySelector('.fa-angle-down');
    toggleAble.classList.toggle('fa-angle-up')
}
