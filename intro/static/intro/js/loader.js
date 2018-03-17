var repeatLoader = setInterval(function() {
    var animation = $('.tetris-wrapper').html();
    $('.tetris').remove();
    $('.tetris-wrapper').html(animation);
}, 5500);

window.onload = function() {
    clearInterval(repeatLoader);
    setTimeout(function() {
        $('.tetris').fadeOut();
        $('.loader-container').fadeOut(400, function(){
            $('.anim-container').delay(400).css('display', 'flex');
        });
        initLanding();
    }, 5500)
};