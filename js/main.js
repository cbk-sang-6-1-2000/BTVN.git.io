$(document).ready(function() {
    if ($(window).width() < 740) {  
        $('.main-menu').click(function (e) { 
            e.preventDefault();
            $('#menu').slideToggle();
            $('.overlay').toggle();
        });
    }
});