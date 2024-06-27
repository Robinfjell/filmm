const container = document.querySelector('.container'); // '.conteiner' yerine '.container' düzeltildi
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function (e) { // '.conteiner' yerine '.container' düzeltildi
    if (!e.target.classList.contains('reserved')) {
        e.target.classList.toggle('select');
        calculateTotal();
    }
});

select.addEventListener('change', function (e) {
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.select'); // 'selectedSeats' düzeltildi
    let selectedSeatCount = selectedSeats.length; // 'selectedSeatCount' düzeltildi

    const selectedSeatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat)); // 'selectedSeatIndex' düzeltildi

    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * parseInt(select.value); // 'parseInt' kullanıldı

    saveToLocalStorage(selectedSeatIndex);
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); // 'selectedSeats' düzeltildi
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedSeats !== null && selectedSeats.length > 0) { // null kontrolü yapıldı
        seats.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('select'); // 'selected' yerine 'select' düzeltildi
            }
        });
    }
    if (selectedMovieIndex !== null) { // null kontrolü yapıldı
        select.selectedIndex = selectedMovieIndex; // 'selectIndex' düzeltildi
    }
}

function saveToLocalStorage(indexes) { // 'indexs' yerine 'indexes' düzeltildi
    localStorage.setItem('selectedSeats', JSON.stringify(indexes)); // 'selectedSeat' yerine 'selectedSeats' düzeltildi
    localStorage.setItem('selectedMovieIndex', select.selectedIndex); // 'select.selectedSeatIndex' düzeltildi
}
