const openbtn=document.querySelector('.open');
const arrow=document.querySelector('.arrow');
const arrowaft=document.querySelector('ind');
const text1=document.querySelector('.onstart .text');
const mains=document.querySelector('.open .mainscreen');

openbtn.addEventListener('click', () => {
    openbtn.classList.add('openaf');
    arrow.classList.add('ind');
    arrow.classList.remove('arrowa');
    text1.classList.add('paf');
    mains.classList.add('mainscreenaf');
})
arrow.addEventListener('click', () => {
    openbtn.classList.remove('openaf');
    arrow.classList.remove('ind');
    arrow.classList.add('arrowa');
    text1.classList.remove('paf');
    mains.classList.remove('mainscreenaf');
})