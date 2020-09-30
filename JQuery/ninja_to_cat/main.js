$('img').click(function () {
    temp = $(this).attr('src');

    $(this).attr('src', $(this).attr('data-alt-src'));
    $(this).attr('data-alt-src', temp);
});
