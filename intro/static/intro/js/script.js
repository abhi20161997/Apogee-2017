$(document).on('click','.small-thumb',function(){

	var details=$(this).find('.event-details').html()
	var name=$(this).find('.event-name').html();
	if(name!=$('.large-grid .event-name').html()){
		if($('.large-grid').hasClass('flipped')){
			$('.large-grid').removeClass('flipped')	;
		}
		if(window.innerWidth<800){
			$('html, body').animate({
				scrollTop: $('.large-grid').offset().top - (window.innerHeight - $('.large-grid').height() )/ 2
			}, 300);
		}
			$('.large-grid .flip-back .event-name').html(name);
			$('.large-grid .flip-back .event-details').html(details);
			$('.large-grid .flip-back').animate({
				left:'0'
			},800,function(){
			$('.large-grid .flip-front').html($('.large-grid .flip-back').html())
			$('.large-grid .flip-back').hide();
			$('.large-grid .flip-back').css({
				left:'-100%'
			});
			$('.large-grid .flip-back').show();
				
			});
	}
});


function speakerResponsive(){
	var extra=$('.home-projects__color').width()-window.innerWidth*0.47
	var leftOrig=$('.home-projects__color').width()-$('.home-projects__color .content-wrap').width()
	var left=(extra+leftOrig)/2
	$('.home-projects__color .content-wrap').css({
		position:'absolute',
		left:left
	})

	if(window.innerWidth<800){
		$('.home-projects__image-wrapper').css({
			visibility: "visible",
			opacity: "1"
		})

		$('.home-projects__title').css({
			    width: "80vw"
		})

		$('.home-projects__title__left-line,.home-projects__title__right-line').hide();
	}
}



$('.nav-item').click(function(){
	$('.anim-container').hide();
	$('.section').hide();
	var section=$(this).attr('href');
	$(section).show();
	initialize(section);
	animateHeading(100);
	animatePara(100);
});


function initialize(section){
	if(section=='#about-wrapper'){
		var headingEle=$('#about-apogee .about-heading h1');
		var contentELe=$('#about-apogee .about-content');
		letteringAnimation(headingEle,contentELe,'APOGEE 2017');
		headingEle=$('#about-retrofuture .about-heading h1');
		contentELe=$('#about-retrofuture .about-content');
		letteringAnimation(headingEle,contentELe,'RETROFUTURE');
	}
	else if(section=="#events-wrapper"){
		$('.large-grid .flip-front').html('<p class="large-description-back"><span class="largest-font">EVENTS</span></p> \
						<div class="event-logo-wrap">	\
							<img src="/2017/static/intro/img/logo.png" alt="">\
						</div>');
		$('.large-grid .flip-back').css({
			left:'-100%'
		})


		var height=$('.grid-half.left').height();

		if(window.innerWidth>1000){
			$($('.grid-half.right')[0]).css('height',height);
		}
		var headingEle=$('#event-info .largest-font');
		var contentELe=$('#event-info .event-logo-wrap');
		letteringAnimation(headingEle,contentELe,'EVENTS');
		$('.small-thumb').removeClass('scaled');
		setTimeout(function(){
			$('.small-thumb').addClass('scaled');
		},200)

		$('.large-grid').removeClass('flipped');
	}
	else if(section=="#speakers-wrapper"){
		speakerResponsive();
	}


	// $('.about-content').hide();

}



$('.reg-form #submit').click(function(){
	var data={
		'name':$('#name').val(),
		'college':$('#college').val(),
		'phone':$('#phone').val(),
		'email':$('#email').val(),
		'about_apogee':$('#about_apogee').val(),
	};

	if(validate(data))
	$.ajax({
		type:'POST',
		url:'./register',
		data:data,
		success:function (response) {
			$('.message').html(response.message).css({
				    'visibility': 'visible'
			});
			if(response.status==1){
				$('.reg-form form input').val('');
			}
		}
	})
})

$('.view-more').click(function(){

	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 300);

	var headingEle=$('#about-retrofuture .about-heading h1');
	var contentELe=$('#about-retrofuture .about-content');
	letteringAnimation(headingEle,contentELe,'Retro Future');
});


function letteringAnimation(headingEle,contentELe,text){
	$(headingEle).hide();
	$(contentELe).css({
		opacity:0
	});
	if($(headingEle).has('.letters').length==0)
		$(headingEle).html(generateHeading(text));
	$(headingEle).show();
	animateHeading($(headingEle).get(0),text);
	setTimeout(function(){
		$(contentELe).animate({
			opacity:1
		},800);
	},800);
}


$(window).resize(function () {
	speakerResponsive();
	var height=$('.grid-half.left').height();

		if(window.innerWidth>1000){
			$('.grid-half.right').css('height',height);
		}
})


$('.header-title').click(function () {
	$('.section').hide();
	$('.anim-container').fadeIn();
	if($('.menu-panel').css('opacity')==1)
		$('.hamburger-wrapper').click();
})


var oldSec;
$('.hamburger-wrapper').click(function(){
	if($('.menu-panel').css('opacity')==0){
		$('.section').map(function(ele,el){
			if($(el).css('display')=='block'){
		 oldSec=$(el).attr('id');
		}
		});
		$('.section').hide();

	}
	if($('.menu-panel').css('opacity')==1){

		$('#'+oldSec).show();
	}
})


// $('.about-heading h1').textillate({
// 	 autoStart: false,
// 	 initialDelay:100,
// 	 in:{
// 	 	effect:'fadeInLeft',
// 	 	// effect:'flipInY',
//       	delayScale: 2.5,
// 	    delay: 50,
// 	 	// shuffle:true
// 	 },
// });

// $('.about-heading h1').on('inAnimationEnd.tlt', function () {
//    $(this).parent().next().fadeIn(700);
// });

// $('.about-content p').textillate({
// 	 autoStart: false,
// 	 minDisplayTime: 200,
// 	 initialDelay:100,
// 	 in:{
// 	 	// shuffle:true
// 	 },
// 	 type:'word'
// });


function validate(data){
	var message = "";
	var nameCheck = /^[A-Za-z]+$/;
	var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
	var phoneCheck = /[7-9]{1}\d{9}/;
	// console.log('hii0');
	if( data.name == "" )
	{
	$('.message').html("Enter Valid Full Name").css({
		'visibility':'visible'
	});
	return false;
	}

	if( data.college == "" )
	{
	$('.message').html("Enter Valid College Name").css({
		'visibility':'visible'
	});
	return false;
	}

	if( data.phone == "" || !phoneCheck.test(data.phone))
	{
	$('.message').html("Enter Valid Phone" ).css({
		'visibility':'visible'
	});
	return false;
	}

	if( data.email == "" || !emailCheck.test(data.email))
	{
	$('.message').html("Enter Valid Email" ).css({
		'visibility':'visible'
	});
	return false;
	}
	return true;

}