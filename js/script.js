const logoSlika = document.querySelector('.logo-img');

if (localStorage.getItem('tema') === 'svetla') {
    document.body.classList.add('svetla');
    if (logoSlika) { 
        logoSlika.src = 'slike/logotamni.png'; 
    }
}

let trenutnaVelicina = parseInt(localStorage.getItem("fontVelicina")) || 100;
document.documentElement.style.fontSize = trenutnaVelicina + "%";

const dugmeTema = document.getElementById('tema-prekidac');
if (dugmeTema) {
    dugmeTema.addEventListener('click', function() {
        document.body.classList.toggle('svetla');
        
        if (document.body.classList.contains('svetla')) 
        {
            if (logoSlika) { 
                logoSlika.src = 'slike/logotamni.png'; 
            }
            localStorage.setItem('tema', 'svetla');
        } else {
            if (logoSlika) { 
                logoSlika.src = 'slike/logo.png'; 
            }
            localStorage.setItem('tema', 'tamna');
        }
    });
}

const btnPovecaj = document.getElementById("font-veci");
const btnSmanji = document.getElementById("font-manji");
if (btnPovecaj) {
    btnPovecaj.addEventListener("click", function() {
        if (trenutnaVelicina < 130) {
            trenutnaVelicina += 10;
            document.documentElement.style.fontSize = trenutnaVelicina + "%"; 
            localStorage.setItem("fontVelicina", trenutnaVelicina);
        }
    });
}
if (btnSmanji) {
    btnSmanji.addEventListener("click", function() {
        if (trenutnaVelicina > 70) {
            trenutnaVelicina -= 10;
            document.documentElement.style.fontSize = trenutnaVelicina + "%"; 
            localStorage.setItem("fontVelicina", trenutnaVelicina);
        }
    });
}

const hamburger = document.querySelector(".hamburger-dugme");
const navigacija = document.querySelector("nav");
if (hamburger && navigacija){
    hamburger.addEventListener('click', function() {
        navigacija.classList.toggle("aktivan");
    });
}

const forma = document.getElementById('kontaktForma');
if (forma) {
    forma.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const ime = document.getElementById('ime').value.trim();
        const email = document.getElementById('email').value.trim();
        const poruka = document.getElementById('poruka').value.trim();

        if (!ime || !email || !poruka) {
            return alert('Popunite sva polja!');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return alert('Unesite ispravan email.');
        }

        alert('Poruka je uspešno poslata!');
    });
}