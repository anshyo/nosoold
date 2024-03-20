const download = document.querySelector('.mid button')
const backDownload = document.querySelector('.gamedl ion-icon')
const body = document.querySelector('body')

const revbtn = document.querySelector('.games .coc .reviews')
const rewin = document.querySelector('.games .coc .rewin')

const revbtn1 = document.querySelector('.games .cr .reviews')
const rewin1 = document.querySelector('.games .cr .rewin')

const revbtn2 = document.querySelector('.games .br .reviews')
const rewin2 = document.querySelector('.games .br .rewin')

const revbtn3 = document.querySelector('.games .hd .reviews')
const rewin3 = document.querySelector('.games .hd .rewin')

const revbtn4 = document.querySelector('.games .bb .reviews')
const rewin4 = document.querySelector('.games .bb .rewin')

// _____________allParentClasses_______________

const downloadScreen = document.querySelector('.gamedl')
const menuBar = document.querySelector('.menubar')
const heading = document.querySelector('.mid')
const allGames = document.querySelector('.allg')
const gamesOverview = document.querySelector('.games')

// _____________________activatingAndDeactivating_____________________

download.addEventListener('click' , () =>{
    downloadScreen.classList.add('gamedlAfter')
    menuBar.classList.add('menubarBlur')
    heading.classList.add('midBlur')
    allGames.classList.add('allgBlur')
    gamesOverview.classList.add('gamesBlur')
    body.classList.add('bodyAfter')
})

backDownload.addEventListener('click' , () =>{
    downloadScreen.classList.remove('gamedlAfter')
    menuBar.classList.remove('menubarBlur')
    heading.classList.remove('midBlur')
    allGames.classList.remove('allgBlur')
    gamesOverview.classList.remove('gamesBlur')
    body.classList.remove('bodyAfter')
})

revbtn.addEventListener('click' , () =>{
    rewin.classList.toggle('rewinAfter')
})

revbtn1.addEventListener('click' , () =>{
    rewin1.classList.toggle('rewinAfter')
})

revbtn2.addEventListener('click' , () =>{
    rewin2.classList.toggle('rewinAfter')
})

revbtn3.addEventListener('click' , () =>{
    rewin3.classList.toggle('rewinAfter')
})

revbtn4.addEventListener('click' , () =>{
    rewin4.classList.toggle('rewinAfter')
})