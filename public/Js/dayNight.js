let timeZone = document.getElementById("day_night");
let dayTheme = document.getElementById("DayTheme");
let nightTheme = document.getElementById("NightTheme");
var theme;
const dayAudio = document.getElementById("dayAudio");


let getTheme = JSON.parse(localStorage.getItem('PageTheme'));
if (getTheme === "Night") {
    timeZone.classList.add("uil-sun");
    timeZone.classList.remove("uil-moon");
    nightTheme.removeAttribute("disabled");
    dayTheme.setAttribute("disabled", "true");
}
timeZone.addEventListener("click", () => {
    if (timeZone.classList.contains("uil-sun")) {
        timeZone.classList.add("active_rotate");
        dayAudio.play();
        setTimeout(() => {
            timeZone.classList.remove("uil-sun");
            timeZone.classList.add("uil-moon");

            dayTheme.removeAttribute("disabled");
            nightTheme.setAttribute("disabled", "true");
            theme = "Day";
            timeZone.classList.remove("active_rotate");
            localStorage.setItem('PageTheme', JSON.stringify(theme));
        }, 300);
    }
    else {
        timeZone.classList.add("active_rotate");
        dayAudio.play();
        setTimeout(() => {
            timeZone.classList.add("uil-sun");
            timeZone.classList.remove("uil-moon");

            nightTheme.removeAttribute("disabled");
            dayTheme.setAttribute("disabled", "true");
            theme = "Night";
            timeZone.classList.remove("active_rotate");
            localStorage.setItem('PageTheme', JSON.stringify(theme));
        }, 300);
    }
    
})
