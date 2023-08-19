const signUpbtn = document.querySelector('.signup-btn');
const signInbtn = document.querySelector('.signin-btn');
const formsWrapper = document.querySelector('.forms-wrapper');

signUpbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    formsWrapper.classList.add("change");
})

signInbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    formsWrapper.classList.remove("change");
})