let timeZone = document.getElementById("day_night");
let dayTheme = document.getElementById("DayTheme");
let nightTheme = document.getElementById("NightTheme");

const dayAudio = document.getElementById("dayAudio");

timeZone.addEventListener("click",()=>{
    if(timeZone.classList.contains("uil-sun"))
    {
        timeZone.classList.add("active_rotate");
        dayAudio.play();
        setTimeout(()=>{
            timeZone.classList.remove("uil-sun");
            timeZone.classList.add("uil-moon");

            dayTheme.removeAttribute("disabled");
            nightTheme.setAttribute("disabled", "true");

            timeZone.classList.remove("active_rotate");
        }, 300);
    }
    else{
        timeZone.classList.add("active_rotate");
        dayAudio.play();
        setTimeout(()=>{
            timeZone.classList.add("uil-sun");
            timeZone.classList.remove("uil-moon");

            nightTheme.removeAttribute("disabled");
            dayTheme.setAttribute("disabled", "true");

            timeZone.classList.remove("active_rotate");
        }, 300);
    }
})