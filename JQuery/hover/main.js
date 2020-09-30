$('img').hover(
    function () {
        $(this).attr('src', 'pizza.jpg');
        $(this).css('background-color', 'gold');
    },
    function () {
        $(this).attr('src', 'logo.png');
        $(this).css('background-color', 'white');
    }
);
