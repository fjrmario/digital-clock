
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.querySelector(".ampm");


function updateClock() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    
    hourEl.innerText = h;
    minuteEl.innerText = m
    secondsEl.innerText = s
    ampmEl.innerText = ampm
    setTimeout(() => {updateClock()},1000)

}

updateClock()
