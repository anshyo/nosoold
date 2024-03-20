const line=document.querySelector('.div2 .cats .line');
const name1=document.querySelector('.div2 .cats .n1');
const name2=document.querySelector('.div2 .cats .n2');
const name3=document.querySelector('.div2 .cats .n3');
const name4=document.querySelector('.div2 .cats .n4');
const name5=document.querySelector('.div2 .cats .n5');

const menu=document.querySelector('.div1 .menu');
const menus=document.querySelector('.div1 .menubar .m');
const menus2=document.querySelector('.div1 .menubar .m2');

const win1=document.querySelector('.div2 .show .w1');
const win2=document.querySelector('.div2 .show .w2');
const win3=document.querySelector('.div2 .show .w3');
const win4=document.querySelector('.div2 .show .w4');
const win5=document.querySelector('.div2 .show .w5');

menu.addEventListener('click', () => {
    menus.classList.toggle('mafter1');
    menus2.classList.toggle('mafter');
})
name1.addEventListener('click', () => {
    name1.classList.add('nafter');
    name2.classList.remove('nafter');
    name3.classList.remove('nafter');
    name4.classList.remove('nafter');
    name5.classList.remove('nafter');

    name1.classList.remove('n');
    name2.classList.add('n');
    name3.classList.add('n');
    name4.classList.add('n');
    name5.classList.add('n');

    line.classList.add('line1');
    line.classList.remove('line2');
    line.classList.remove('line3');
    line.classList.remove('line4');
    line.classList.remove('line5');

    win1.classList.remove('win0');
    win2.classList.add('win0');
    win3.classList.add('win0');
    win4.classList.add('win0');
    win5.classList.add('win0');
})
name2.addEventListener('click', () => {
    name2.classList.add('nafter');
    name1.classList.remove('nafter');
    name3.classList.remove('nafter');
    name4.classList.remove('nafter');
    name5.classList.remove('nafter');

    name2.classList.remove('n');
    name1.classList.add('n');
    name3.classList.add('n');
    name4.classList.add('n');
    name5.classList.add('n');

    line.classList.add('line2');
    line.classList.remove('line1');
    line.classList.remove('line3');
    line.classList.remove('line4');
    line.classList.remove('line5');

    win2.classList.remove('win0');
    win1.classList.add('win0');
    win3.classList.add('win0');
    win4.classList.add('win0');
    win5.classList.add('win0');
})
name3.addEventListener('click', () => {
    name3.classList.add('nafter');
    name2.classList.remove('nafter');
    name1.classList.remove('nafter');
    name4.classList.remove('nafter');
    name5.classList.remove('nafter');

    name3.classList.remove('n');
    name2.classList.add('n');
    name1.classList.add('n');
    name4.classList.add('n');
    name5.classList.add('n');

    line.classList.add('line3');
    line.classList.remove('line2');
    line.classList.remove('line1');
    line.classList.remove('line4');
    line.classList.remove('line5');

    win3.classList.remove('win0');
    win2.classList.add('win0');
    win1.classList.add('win0');
    win4.classList.add('win0');
    win5.classList.add('win0');
})
name4.addEventListener('click', () => {
    name4.classList.add('nafter');
    name2.classList.remove('nafter');
    name3.classList.remove('nafter');
    name1.classList.remove('nafter');
    name5.classList.remove('nafter');

    name4.classList.remove('n');
    name2.classList.add('n');
    name3.classList.add('n');
    name1.classList.add('n');
    name5.classList.add('n');

    line.classList.add('line4');
    line.classList.remove('line2');
    line.classList.remove('line3');
    line.classList.remove('line1');
    line.classList.remove('line5');

    win4.classList.remove('win0');
    win2.classList.add('win0');
    win3.classList.add('win0');
    win1.classList.add('win0');
    win5.classList.add('win0');
})
name5.addEventListener('click', () => {
    name5.classList.add('nafter');
    name2.classList.remove('nafter');
    name3.classList.remove('nafter');
    name4.classList.remove('nafter');
    name1.classList.remove('nafter');

    name5.classList.remove('n');
    name2.classList.add('n');
    name3.classList.add('n');
    name4.classList.add('n');
    name1.classList.add('n');

    line.classList.add('line5');
    line.classList.remove('line2');
    line.classList.remove('line3');
    line.classList.remove('line4');
    line.classList.remove('line1');

    win5.classList.remove('win0');
    win2.classList.add('win0');
    win3.classList.add('win0');
    win4.classList.add('win0');
    win1.classList.add('win0');
})