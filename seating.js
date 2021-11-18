$(function () {
    initJquerySeating();
});

function initJquerySeating() {
    console.log(' i am jquery loading');

    const maxSeatsChosen = 4;

    $('.seat').on('click', function () {

        const rowSeat = $(this).data("row");
        const colSeat = $(this).data("col");

        console.log(`You chose row ${rowSeat} and col ${colSeat}`)





        if ($(this).hasClass('reserved')) return;



        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            ShowSeatCount();
            return;
        }

        if ($('.selected').length >= maxSeatsChosen) {
            return;
        }


        $(this).addClass('selected');
        ShowSeatCount();

    })






}

function ShowSeatCount() {

    let seatsChosen = [];

    $('.selected').each(function (index) {

        const rowSeat = $(this).data("row");
        const colSeat = $(this).data("col");

        seatsChosen.push({ row: rowSeat, col: colSeat });



    })
    let chosenSeats = seatsChosen.map(x => { return `${x.row}:${x.col}` });

    $('#seatsChosen').html(`selected seats: ${chosenSeats.join(', ')}`);


}