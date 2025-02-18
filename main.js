const btn = document.getElementById('myBtn');

let button = 0;
function turn_On_Off() {
    if (button == 0) {
        let yellow = document.getElementById('yellow')
        yellow.style.display = 'block';
        let white = document.getElementById('white')
        white.style.display = 'none';
        let myBtn = document.getElementById('myBtn');
        myBtn.innerText = 'Spegni'
        button = 1;
    } else if (button == 1) {
        let yellow = document.getElementById('yellow')
        yellow.style.display = 'none';
        let white = document.getElementById('white')
        white.style.display = 'block';
        let myBtn = document.getElementById('myBtn');
        myBtn.innerText = 'Accendi'

        button = 0;
    }
}

btn.addEventListener('click', turn_On_Off)