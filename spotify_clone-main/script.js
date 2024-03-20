const arrow=document.querySelector('.main .top .prof .arrow');
const drop=document.querySelector('.main .top .prof .drop');

arrow.addEventListener('click', () => {
    drop.classList.toggle('drop-a');
})
arrow.addEventListener('click', () => {
    arrow.classList.toggle('arrow-a');
})