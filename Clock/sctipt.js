let hour = document.querySelector('.hours');
let mints = document.querySelector('.mints');
let secnds = document.querySelector('.secnds');

function setDate() {
    let now = new Date();

    let getSec = now.getSeconds();
    let getMins = now.getMinutes();
    let getHour = now.getHours();
    getHour = getHour-12;
    // document.write(getHour)

    let secDegree = (getSec/60)*360;
    let minDegree = (getMins/60)*360;
    let hourDegree = ((getHour)/12)*360;

    secnds.style.transform = `rotate(${secDegree}deg)`;
    mints.style.transform = `rotate(${minDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
    
}
// document.write(new Date().toLocaleTimeString())

setInterval(setDate, 1000);