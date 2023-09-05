const main = document.querySelector('.bob')
const img1 = document.querySelector('.shoe1');
const img2 = document.querySelector('.shoe2');
const img3 = document.querySelector('.shoe3');
const img4 = document.querySelector('.shoe4');

img1.addEventListener('click', ()=>{
    main.style.backgroundImage = "url('./images/image-shoe-1.jpg')"

});

img2.addEventListener('click', ()=>{
    main.style.backgroundImage = "url('./images/image-shoe1.jpg')"

});

img3.addEventListener('click', ()=>{
    main.style.backgroundImage = "url('./images/image-shoe2-4.jpg')"

});

img4.addEventListener('click', ()=>{
    main.style.backgroundImage = "url('./images/image-2shoe.jpg')"

});