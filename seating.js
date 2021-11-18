$(function () {
    initJquerySeating();
});

function initJquerySeating() {
    console.log(' i am jquery loading');

    const maxSeatsChosen = 2;

    $('.seat').on('click', function () {

        if ($(this).hasClass('reserved')) return;



        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
return;
        } 

        if ($('.selected').length >= maxSeatsChosen) { 
            return; 
        } 


        $(this).addClass('selected');

    })






}