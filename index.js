const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('April 19, 2023 16:50:00').getTime(),
    x = setInterval(function () {


            document.getElementById('dias').innerText = 0,
            document.getElementById('horas').innerText = 0,
            document.getElementById('minutos').innerText = 0,
            document.getElementById('segundos').innerText = 0;

    }, second)

