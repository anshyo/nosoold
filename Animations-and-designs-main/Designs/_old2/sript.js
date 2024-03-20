const _2dcsslinear=document.querySelector('._2dcsss .c1');
const _2dcsswindow=document.querySelector('.linearanimation');

_2dcsslinear.addEventListener('click', () => {
    _2dcsswindow.classList.toggle('linearanimationadd');
})
cs2.addEventListener('click', () => {
    chatsArea.classList.toggle('chat-areas-a');
})
arc.addEventListener('click', () => {
    arcArea.classList.add('arc-area-a');
    arcArea.classList.remove('arc-area-b');
})