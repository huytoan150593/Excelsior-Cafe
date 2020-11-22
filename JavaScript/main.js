document.addEventListener("DOMContentLoaded", function() {
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");

    function clock() {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        console.log(h);
        hours.innerHTML = a(h) + ":";
        minutes.innerHTML = a(m) + ":";
        seconds.innerHTML = a(s);
    }
    function a(x) {
        if (x < 10) return "0" + x;
        return x;
    }
    setInterval(clock, 1000);
})