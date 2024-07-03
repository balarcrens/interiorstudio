let calcScrollValue = () => {
    let scrollprogress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollvalue = Math.round((pos * 100) / calcheight);

    if (pos > 100) {
        scrollprogress.style.display = "grid";
    }
    else {
        scrollprogress.style.display = "none"
    }

    scrollprogress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollprogress.style.background = `conic-gradient(#05aaff ${scrollvalue}%, #d7d7d7 ${scrollvalue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue; 