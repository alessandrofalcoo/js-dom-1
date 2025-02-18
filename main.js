function turnOn(btn) {
    if (btn) {
        document.getElementById('yellow').style.display = "block";
        document.getElementById('white').style.display = "none";

    } else {
        document.getElementById('yellow').style.display = "none";
        document.getElementById('white').style.display = "block";

    }
}

const turn_on = document.addEventListener('click', turnOn());

