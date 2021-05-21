function setDate() {

    var dogumgunu = new Date();
    var bugun = dogumgunu.getDay();
    var saat = dogumgunu.getHours();
    var dakika = dogumgunu.getMinutes();
    var saniye = dogumgunu.getSeconds();

    switch (bugun) {
        case 0:
            bugun = "pazar";
            break;
        case 1:
            bugun = "pazartesi";
            break;
        case 2:
            bugun = "sali";
            break;
        case 3:
            bugun = "carsamba";
            break;
        case 4:
            bugun = "persembe";
            break;
        case 5:
            bugun = "cuma";
            break;
        case 6:
            bugun = "cumartesi";
    }

    saniye = saniye < 10 ? `0${saniye}` : saniye;
    dakika = dakika < 10 ? `0${dakika}` : dakika;
    saat = saat < 10 ? `0${saat}` : saat;

    document.getElementById('days').innerText = bugun;
    document.getElementById('hours').innerText = saat;
    document.getElementById('minutes').innerText = dakika;
    document.getElementById('seconds').innerText = saniye;

}

function getName() {
    var n, q = 'Enter name';
    if (!window.sessionStorage) {  // if sessionStorage not supported
        return window.prompt(q); // perform other action
    }
    n = window.sessionStorage.getItem('name');
    if (!n) {
        n = window.prompt(q);
        window.sessionStorage.setItem('name', n);
    }

    document.getElementById('headline').innerText = `merhabalar ben ${n}`
    document.querySelector('title').innerText = `${n}'in dogumgunu`

    return n;


}

getName()
setDate()
setTimeout(function () {
    window.location.reload(1);
}, 1000);
