let days = document.querySelector(".days p");
let hours = document.querySelector(".hours p");
let minutes = document.querySelector(".minutes p");
let seconds = document.querySelector(".seconds p");

let content = document.querySelector(".content")

let worldCupDate = new Date("may 13 2026 01:29:0").getTime();

let count = setInterval(() => {
    let dateNow = new Date().getTime();
    let diff = worldCupDate - dateNow;

    let day = Math.floor(diff / (1000 * 60 * 60 * 24));
    days.innerHTML = day < 10 ? `0${day}`: day;
    
    let hour =  Math.floor( (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours.innerHTML = hour < 10 ? `0${hour}`: hour;

    let minute =  Math.floor( (diff % (1000 * 60 * 60)) / (1000 * 60));
    minutes.innerHTML = minute < 10 ? `0${minute}`: minute;

    let second =  Math.floor( (diff % (1000 * 60)) / (1000 ));
    seconds.innerHTML = second < 10 ? `0${second}`: second;
    if(diff <= 0){
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
        clearInterval(count);
        content.style.display = "flex";
    }

} , 1000)