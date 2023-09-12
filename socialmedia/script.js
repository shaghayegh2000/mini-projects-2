const slideshow = document.querySelector('.slideshow');

setInterval(() => {
    const firstIcon = slideshow.firstElementChild;
    firstIcon.classList.add('fade');
    const third = slideshow.children[3];
    
    third.classList.add('filter');
    third.previousElementSibling.classList.remove('filter');


    setTimeout(() => {
        slideshow.removeChild(firstIcon);
        slideshow.appendChild(firstIcon);
        setTimeout(() => {
            firstIcon.classList.remove('fade');
        }, 500);
    }, 500);
}, 3000);