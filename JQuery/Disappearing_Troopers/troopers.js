$(document).ready(function () {

    $('.troopers, .trooper').click(function () {
        $(this).hide(function () {
        })
    })

    $('#restore').click(function(){
        $('.troopers, .trooper').show(function() {
        })
    })

})