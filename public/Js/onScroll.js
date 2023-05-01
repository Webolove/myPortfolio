const OnScroll = document.getElementsByClassName('OnScroll')[0];
let scroll = document.getElementById("scrollUp");
document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 450) {
        OnScroll.removeAttribute("disabled");
        scroll.classList.add("showScroll");
    } else {
        OnScroll.setAttribute("disabled","true");
        scroll.classList.remove("showScroll");
    }
});