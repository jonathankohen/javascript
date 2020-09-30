$('#new_red_text').hide();
$('img').hide();

$('#btn_turn_red').click(function () {
    if ($('#btn_turn_red').is('.btn-primary')) {
        $('#btn_turn_red').addClass('btn-danger');
        $('#btn_turn_red').removeClass('btn-primary');
    } else {
        $('#btn_turn_red').addClass('btn-primary');
        $('#btn_turn_red').removeClass('btn-danger');
    }

    if ($('#p_turn_red').is('.text-black')) {
        $('#p_turn_red').addClass('text-danger');
        $('#p_turn_red').removeClass('text-black');
    } else {
        $('#p_turn_red').addClass('text-black');
        $('#p_turn_red').removeClass('text-danger');
    }

    if ($('#new_red_text').is(':hidden')) {
        $('#new_red_text').slideDown('slow');
    } else {
        $('#new_red_text').slideUp();
    }

    $('.slidetoggle').after(
        "<p id='try_me' class='text-center px-2'>Try me next!</p>"
    );
});

$('#slidetoggle').click(function () {
    $(this).toggleClass('btn-warning text-white');
    $('img').slideToggle();
    $('img').addClass('bg-warning p-3');
    $('img').attr('alt', 'Visible Pic');

    if ($('#try_me').is(':visible')) {
        $('#try_me').hide();
        $('#append').before(
            "<p id='now_below' class='text-center px-2'>Now this one:</p>"
        );
    }
});

$('#append').click(function () {
    if ($('#now_below').is(':visible')) {
        $('#now_below').hide();
    }

    if ($('#new_green_text').is(':visible')) {
        $(this).toggleClass('btn-success');
        $('#new_green_text').html(
            "<p id='carried_away' class='text-center text-dark my-2 mx-5 px-5'>Don't get carried away.</p>"
        );
        $('#carried_away').fadeOut('slow');
    } else {
        $('#append_to').append(
            "<p id='new_green_text' class='text-center text-success my-2 mx-5 px-5'>Nice! You done did it.</p>"
        );
        $(this).toggleClass('btn-success');
    }
});

$('input')
    .keyup(function () {
        let value = $(this).val();
        $('#feedback_output').text(value);
    })
    .keyup();
