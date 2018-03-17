$.fn.extend({
	animateCss: function (animationName, callback) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		this.addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
            // console.log(callback);
            if (callback!=undefined)
            	callback();
        });
	}
});

$('.enter-site').hover(function(){
	$('.btn-bg').css('height','100%');
}, function() {
	$('.btn-bg').css('height','0%');
})

function initLanding() {
	var i=0;
	// $('.anim-container').css('display','flex');
	setTimeout(function() {
		// $('.enter-site').fadeIn();
		$('.site-content').fadeIn();
		$('.loader-container').remove();
		$('.text-wrapper div').css('visibility','visible');
		sponsorsLoad();
		contactsLoad();
		eventsLoad();
		speakersLoad();
		setTimeout(function () {

		var s = document.createElement( 'script' );
		  s.setAttribute( 'src', '/2017/static/intro/js/speakers/scripts.js' );
		  document.body.appendChild( s );
		},1000);
		// $('.landing-letters > div').css('visibility','visible');
	}, 2000);

}




// $('.enter-site').click(function() {
// 	$('.anim-container').fadeOut();
// 	$('.site-content').fadeIn();	
// })