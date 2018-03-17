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

function generateHeading(heading) {
	var html;
	html = '<div class="letters">';
	for (var i = 0; i < heading.length; i++) {
		if (heading[i]==' ')
			html += '<div class="letterh-'+i+'" style="animation-delay:'+i*50+'ms"> <span class="mask">&nbsp;</span> </div>'; 
		else
			html += '<div class="letterh-'+i+'" style="animation-delay:'+i*50+'ms"> <span class="mask">'+heading[i]+'</span> </div>'; 
	}
	html += '</div>';
	return html;
}

function animateHeading(element,heading) {
	if(heading!=undefined)
	for (var i = 0; i < heading.length; i++) {
		$(element).find('.letterh-'+i).animateCss('slideInUp');
	};
}

function generatePara(words) {
	var html;
	html = '<div class="letters">';
	for (var i = 0; i < words.length; i++) {
		html += '<div class="words-'+i+'" style="animation-delay:'+i*10+'ms"> <span class="mask">'+words[i]+'</span> </div>';
		html += '<div class="space-'+i+'" style="animation-delay:'+i*10+'ms"> <span class="mask">&nbsp;</span> </div>'; 
	}
	html += '</div>';
	return html;
}

function animatePara(wordslength) {
	for (var i = 0; i < wordslength; i++) {
		$('.words-'+i).hide();
		$('.words-'+i).fadeIn();
		$('.words-'+i).animateCss('slideInUp');
	};
}

$('.t1').hide();
$('.t1').html(generateHeading('PAPER PRESENTATION'));
$('.t1').show();
animateHeading($('.t1').get(0),'PAPER PRESENTATION');

$('.i1').hide();
var info1 = 'Paper presentation forms the core event of APOGEE that showcases a wide range of technical and review papers on a spectrum of topics ranging from industrial applications to the very latest scientific innovations.';
var words1 = info1.split(' ');
$('.i1').html(generatePara(words1));
$('.i1').show();
// animatePara(words1.length);

$('.t2').hide();
$('.t2').html(generateHeading('PROJECTS'));
$('.t2').show();
animateHeading($('.t2').get(0),'PROJECTS');

$('.i2').hide();
var info1 = 'APOGEE exhibits over 550 projects in various fields of science and engineering. Based on practical application, they showcase unparalleled excellence. Some of the categories of Projects include Electronics, Environment, Software Development and Mathematical Modelling.. <br> <b>Abstract submission for non BITSian participants is open from 14th December 2016 to 7th January 2017.</b>';
var words2 = info1.split(' ');
$('.i2').html(generatePara(words2));
$('.i2').show();



