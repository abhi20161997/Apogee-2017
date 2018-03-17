var contacts_data = [
	{
		dept:'Finance',
		img_url:'/2017/static/intro/img/contacts/prez.jpg',
		back_img:'/2017/static/intro/img/contacts/prez_back.jpg',
		name:'Bharatha Ratna Puli',
		phone:'+91-8297039977',
		email:'president[at]pilani.bits-pilani.ac.in',
	},
	{
		dept:'Inventory',
		img_url:'/2017/static/intro/img/contacts/gensec.jpg',
		back_img:'/2017/static/intro/img/contacts/gensec_back.jpg',
		name:'Shivam Jindal',
		phone:'+91-9717024281',
		email:'gensec[at]pilani.bits-pilani.ac.in',
	},
	{
		dept:'For sponsorship and marketing',
		img_url:'/2017/static/intro/img/contacts/spons.jpg',
		back_img:'/2017/static/intro/img/contacts/spons_back.jpg',
		name:'Keshav Jain',
		phone:'+91-9833175804',
		email:'sponsorship[at]bits-apogee[dot]org',
	},
	{
		dept:'For reception and accommodation',
		img_url:'/2017/static/intro/img/contacts/recnacc.jpg',
		back_img:'/2017/static/intro/img/contacts/recnacc_back2.jpg',
		name:'Anshuman Sharma',
		phone:'+91-9425331555',
		email:'reccnacc[at]bits-apogee[dot]org',
	},
	{
		dept:'For invites and correspondence',
		img_url:'/2017/static/intro/img/contacts/pcr.jpg',
		back_img:'/2017/static/intro/img/contacts/pcr_back.jpg',
		name:'Alanckrit Jain',
		phone:'+91-9582553659',
		email:'pcr[at]bits-apogee[dot]org',
	},
	{
		dept:'For Publicity and Online Partnership',
		img_url:'/2017/static/intro/img/contacts/adp.jpg',
		back_img:'/2017/static/intro/img/contacts/adp_back.jpg',
		name:'Vaibhav Jain',
		phone:'+91-8239737593',
		email:'adp[at]bits-apogee[dot]org',
	},
	{
		dept:'For projects, events and registration',
		img_url:'/2017/static/intro/img/contacts/controls.jpg',
		back_img:'/2017/static/intro/img/contacts/controls_back.jpg',
		name:'Himangshu Baid',
		phone:'+91-9704050069',
		email:'controls[at]bits-apogee[dot]org',
	},
	{
		dept:'For paper presentations and Guest Lectures',
		img_url:'/2017/static/intro/img/contacts/pep.jpg',
		back_img:'/2017/static/intro/img/contacts/pep_back.jpg',
		name:'Abhishek Gupta',
		phone:'+91-9453212629',
		email:'pep[at]bits-apogee[dot]org, guestlectures[at]bits-apogee[dot]org',
	},
	{
		dept:'For website and online registration queries',
		img_url:'/2017/static/intro/img/contacts/dvm.jpg',
		back_img:'/2017/static/intro/img/contacts/dvm_back.jpg',
		name:'Hitesh Raghuvanshi',
		phone:'+91-8003398809',
		email:'webmaster[at]bits-apogee[dot]org',
	}
 ];

function contactsLoad() {

contacts_data.map(function(ele,i){
	var $ele=$('.c_element:nth-of-type(1)').clone();
	$ele.show();
	$ele.addClass('animated fadeInUp');
	$ele.find('.dept_name').html(ele.dept);
//	$ele.find('.c_e_i img').attr('src',ele.img_url);
	$ele.find('.c_e_i').css('opacity',0);
	$ele.find('.c_e_u').css({
		'background-image':'url('+ele.back_img+')',
		'background-size':'cover'
	});
	$ele.find('.c_name').html(ele.name);
	$ele.find('.c_phone').html(ele.phone);
	$ele.find('.c_email').html(ele.email);
	$('.c_box').append($ele);
});

}


var sponsors_data = [

	{
		title:'Title Sponsor',
		img:'/2017/static/main/img/sponsors/mapMyIndia.png',
		type:'1',
		link:'http://www.mapmyindia.com/'
	},
	{
		title:'Title Sponsor - Litfest',
		img:'/2017/static/main/img/sponsors/tata.jpg',
		type:'2',
		link:'http://www.tata.com/company/profile/Tata-Sons'
	},
	{
		title:'Gold Sponsor',
		img:'/2017/static/main/img/sponsors/filtercopy.jpg',
		type:'2',
		link:'http://www.filtercopy.com/'
	},
	{
		title:'Title Sponsor - Vootathon',
		img:'/2017/static/main/img/sponsors/voot.png',
		type:'2',
		link:'https://www.voot.com/'
	},
	{
		title:'Media Partner',
		img:'/2017/static/main/img/sponsors/inshorts.jpg',
		type:'2',
		link:'https://www.inshorts.com/'
	},
	{
		title:'Gold Partner',
		img:'/2017/static/main/img/sponsors/sail.jpg',
		type:'2',
		link:'https://www.sail.co.in/'
	},
	{
		title:'Driven By Partner - FTGP',
		img:'/2017/static/main/img/sponsors/hero.png',
		type:'2',
		link:'http://www.heromotocorp.com/en-in/'
	},
	{
		title:'Augmented Reality Partner',
		img:'/2017/static/main/img/sponsors/yeppar.jpg',
		type:'2',
		link:'https://yeppar.com/'
	},
	{
		title:'Education Partner',
		img:'/2017/static/main/img/sponsors/byjus.jpg',
		type:'2',
		link:'https://byjus.com/'
	},
	{
		title:'Platinum Sponsor - Litfest',
		img:'/2017/static/main/img/sponsors/rupa.jpg',
		type:'2',
		link:'http://rupapublications.co.in/'
	},
	{
		title:'Platinum Sponsor - Litfest',
		img:'/2017/static/main/img/sponsors/harperCollins.jpg',
		type:'2',
		link:'https://harpercollins.co.in/'
	},
	{
		title:'Platinum Sponsor - Litfest',
		img:'/2017/static/main/img/sponsors/panmacillan.png',
		type:'2',
		link:'http://www.panmacmillan.co.in/'
	},
	{
		title:'Workspace Partner',
		img:'/2017/static/main/img/sponsors/bhive.png',
		type:'2',
		link:'https://bhiveworkspace.com/'
	},
	{
		title:'Platinum Sponsor',
		img:'/2017/static/main/img/sponsors/spmh.jpg',
		type:'2',
		link:'http://spmhydraulics.in/'
	},
	{
		title:'Title Sponsor - Hackathon',
		img:'/2017/static/main/img/sponsors/viacom.jpg',
		type:'2',
		link:'http://www.viacom.com/'
	},
	{
		title:'Merchandise Partner',
		img:'/2017/static/main/img/sponsors/souledStore.jpg',
		type:'2',
		link:'https://www.thesouledstore.com/'
	},	
	{
		title:'Media Partner',
		img:'/2017/static/main/img/sponsors/paisawapas.png',
		type:'2',
		link:'https://www.paisawapas.com/'
	},
	{
		title:'Youth Partner',
		img:'/2017/static/main/img/sponsors/helloIntern.png',
		type:'2',
		link:'https://www.hellointern.com/'
	},
	{
		title:'Digital Media Partner',
		img:'/2017/static/main/img/sponsors/techPortal.png',
		type:'2',
		link:'https://thetechportal.com/'
	},
	{
		title:'Official Online Media Partner',
		img:'/2017/static/main/img/sponsors/igniteEngineers.png',
		type:'2',
		link:'http://www.igniteengineers.com/'
	},
	{
		title:'Online Media Partner',
		img:'/2017/static/main/img/sponsors/techNotification.png',
		type:'2',
		link:'https://www.technotification.com/'
	},
	{
		title:'Online Media Partner',
		img:'/2017/static/main/img/sponsors/fuccha.png',
		type:'2',
		link:'http://fuccha.in/'
	},
	{
		title:'Online Media Partner',
		img:'/2017/static/main/img/sponsors/abraxasNU.png',
		type:'2',
		link:'http://www.abraxasnu.com/'
	},
	{
		title:'Online Media Partner',
		img:'/2017/static/main/img/sponsors/autoTechReview.png',
		type:'2',
		link:'http://autotechreview.com/'
	},
	{
		title:'Online Media Partner',
		img:'/2017/static/main/img/sponsors/MBAClubIndia.png',
		type:'2',
		link:'http://www.mbaclubindia.com/'
	},
	{
		title:'Sponsor',
		img:'/2017/static/main/img/sponsors/knowafest.png',
		type:'2',
		link:'http://www.knowafest.com/college-fests/events'
	},

]


function sponsorsLoad() {

	sponsors_data.forEach(function (ele) {
		var $ele = $('.spons-item-wrap.hidden').clone();
		$ele.removeClass('hidden');
		$ele.addClass('type-'+ele.type);
		$ele.find('a').attr('href',ele.link);
		$ele.find('.spons-title').html(ele.title);
		$ele.find('.spons-img').attr('src',ele.img);
		$('.spons-wrapper').append($ele);
	})
}
