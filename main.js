//Check the local storage color


let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
    document.querySelectorAll(".colors-list li ").forEach(element => {

        //remove active class from all li 
        element.classList.remove("active")

        //add active class on recent color

        if (element.dataset.color === mainColor) {
            //add active class
            element.classList.add("active")
        }

    });
}



//Toggle Spin Class On Icon
document.querySelector(".toggle .setting-icon").onclick = function () {
    //toggle class fa-spin
    this.classList.toggle("fa-spin");
    //toggle class open
    document.querySelector(".setting-box").classList.toggle("open");
};


//switch colors 
const colorsLi = document.querySelectorAll(".colors-list li ");

// loop on all li 
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        //replace color in root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //set color on local storage 
        localStorage.setItem("color_option", e.target.dataset.color)

        //remove active class from all 
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active")

        });
        // add active class on target
        e.target.classList.add("active");

    })


})

//events count down 

let countDownDate = new Date("jan 31 , 2023 23:59:59").getTime();

let counter = setInterval(() => {
    //get the recent date 
    let dateNow = new Date().getTime();

    //the defrence between dates
    let dateDif = countDownDate - dateNow;

    //Get Time Unites 
    let days = Math.floor(dateDif / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let seconds = Math.floor((dateDif % (1000 * 60)) / (1000));
    let minutes = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDif < 0) {
        clearInterval()
    }
}, 1000)

