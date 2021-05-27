$(document).ready(function () {

    $('#hide').click(function () {
        $('#droids').hide(function () {
        });
    });

    $('#show').click(function () {
        $('#droids').show(function () {
        });
    });

    $('#slidedown').click(function () {
        $('#t1').slideDown();
    });

    $('#slideup').click(function () {
        $('#d1').slideUp();
    });

    $('.onoff').click(function () {
        $('#beam').slideToggle(function () {
        });
    });

    $('#fadein').click(function () {
        $('.trooper').fadeIn();
    });

    $('#fadeout').click(function () {
        $('#run').fadeOut();
    });

    $('#before').click(function () {
        $('#door1').before($('#dt'));
    });

    $('#after').click(function () {
        $('#door2').after($('#d2'));
    });

    $('#spawn').click(function () {
        $('div.bunker').append($('<img src="images/EmojiBlitzStormtrooper-PowerUp.png" alt="Stormtrooper with blaster">'));
    })

    $('#goodbye').click(function () {
        $('#final').html('<img src="Images/EmojiBlitzC-3PO1.png" alt="C3PO"><h3> May the force be with you. </h3><img src="Images/EmojiBlitzR2D2.png" alt="R2D2">');
    })

})