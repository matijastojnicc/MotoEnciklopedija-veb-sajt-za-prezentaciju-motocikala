$(document).ready(function() {
    $('.slajder-kontejner').each(function() {
        var $kontejner = $(this);
        var $slajdovi = $kontejner.find('.slajd');
        var indeks = 0;

        function prikazi(noviIndeks) {
            $slajdovi.eq(indeks).removeClass('aktivan');
            indeks = noviIndeks;

            if (indeks >= $slajdovi.length){
                indeks = 0;
            }
            if (indeks < 0){
                indeks = $slajdovi.length - 1;
            }

            $slajdovi.eq(indeks).addClass('aktivan');
        }

        $kontejner.find('.prethodni').click(function() { 
            prikazi(indeks - 1); 
        });
        $kontejner.find('.sledeci').click(function() { 
            prikazi(indeks + 1); 
        });
    });
});