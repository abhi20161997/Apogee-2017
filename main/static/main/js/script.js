
// SEARCH 
var menu_list = [
  {
    "menu": "Schedule",
    "hash": "schedule"
  },
  {
    "menu": "Events",
    "hash": "events"
  },
  {
    "menu": "E Summit",
    "hash": "e_summit"
  },
  {
    "menu": "Think Again",
    "hash":"think-again"
  },
  {
    "menu": "Workshop",
    "hash": "workshop"
  },
  {
    "menu": "Literary Fest",
    "hash":"literary-fest"
  },
  {
    "menu": "Prof Show"
  },
 
  {
    "menu": "Competitions",
    "hash":"competitions"
  },
  {
    "menu": "Login/Register",
    "hash":"login-register"
  }
]

// $(document).click(function(ev){
// 	var el=ev.target;
// 	if($(el).closest('.pages').length==0){
// 		$('.pages.page-open').removeClass('page-open')
// 		$('nav').show();
// 	}
// })

processEvents();
$('.mob-nav .results.menu ul').html('');
$.each(menu_list,function (_,ele) {
		$('.mob-nav .results.menu ul').append('<li><a href="#'+ele['hash']+'">'+ele['menu']+'</a></li>')

})

$('img.close').click(function(){
	$('.mob-nav').fadeOut();
	$(this).hide();
	$('img.open').show()
})

$('img.open').click(function(){
	processEvents();
	$('.mob-nav').fadeIn();
	$(this).hide();
	$('img.close').show()
})

// $('li.search-mob-icon').click(function(){
// 	$('.pages').addClass('pg-open');
// 	$('nav').hide();
// 	$('.back-img').fadeIn();
// })

$('.back-img').click(function(){
	// $('.pages').css({
	// 	right:'-80%'
	// },600,function(){
	// 	$(this).hide();
	// })
	$('.pages').removeClass('pg-open')
	$('nav,footer').fadeIn();
	location.hash='';
	$('.back-img').fadeOut();
})


$('.page-trigger').click(function(){
	var page=$(this).attr('data-page');
	openPage(page);

})


// function openPage(page){
// 	location.hash='#'+page;
// 	if(page!=''){
// 		$('.pages.'+page).addClass('pg-open');
// 		$('nav').hide();
// 		$('.back-img').fadeIn();
// 	}
// }
// var hashPage = location.hash.substr(1);
// if(hashPage!='' && !hashPage.includes('landing'))
// 	openPage(hashPage);


// LOGIN - REGISTER 


// get cookie

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


$('#login-submit').click(function(ev){
	ev.preventDefault();
	data={}
	$('#login-form .message').html('');
	$.each($('#login-form').serializeArray(), function(_, kv) {
		  data[kv.name] = kv.value;
	});
	data['csrfmiddlewaretoken'] = csrftoken;
	$.ajax({
		method:'POST',
		url:'./api/login/',
		data:data,
		success:function(response){
			if(response.status == 1) {
				window.location = window.location.href.split('#')[0];
			}
			$('#login-form .message').html(response.message);		
		},
		error:function(response){
				response=response.responseJSON;
				var message=Object.values(response)[0][0];
				$('#login-form .message').html(message);
		}
	})
})


$('#register-submit').click(function(ev){
	ev.preventDefault();
	data={};
	$('#register-form .message').html('');
	$.each($('#register-form').serializeArray(), function(_, kv) {
		  data[kv.name] = kv.value;
	});
	data['csrfmiddlewaretoken'] = csrftoken;
	$.ajax({
		method:'POST',
		url:'./api/register/',
		data:data,
		success:function(response){
			$('#register-form .message').html('You have successfully registered. Please check your email.');
		},
		error:function (response) {
				response=response.responseJSON;
				var message=Object.values(response)[0][0]
				$('#register-form .message').html(message);
			
		}
	})
})



	

	var events_processed = [];


	function processEvents(){
		$.each(events_summary,function(i,ele){
			var ix=get_cat_index(ele.category,cat_list);
		    $.each(ele.events,function(x,ev){
				events_processed.push({
					name:ev.name,
					cat_name:ele.category,
					cat_i:ix,
					event_i:x,
					tags:ev.tags,
					short_desc:ev.short_description
				})	
		    });
			
		});
	}


	var event_search_options = {	keys: ['name'],threshold:0.4};
	var menu_search_options = {	keys: ['menu'],threshold:0.4};
	var event_search = new Fuse(events_processed, event_search_options);
	var menu_search = new Fuse(menu_list, menu_search_options);
	$('#search-input').on('change',function(){
		$('.results ul').html('');
		var search_key=$(this).val();
		var ev_result = event_search.search(search_key);
		var menu_result = menu_search.search(search_key);
		// if(ev_result.length==0)
		// 	$('.result-wrap.events').hide();
		// else
		// 	$('.result-wrap.events').show();
		// if(menu_result.length==0)
		// 	$('.result-wrap.menu').hide();
		// else
		// 	$('.result-wrap.menu').show();

		ev_result.map(function(ele){
			var hashUrl = (ele.cat_i+1)+','+(ele.event_i+1);
			$('.result-wrap.events .results ul').append('<li onclick="openEventPage('+hashUrl+')">'+ele.name+'</li>')
		})
		menu_result.map(function(ele){
			$('.result-wrap.menu .results ul').append('<li><a>'+ele.menu+'</a></li>')
		})
	})

	$('#search-mob').on('change',function () {
		$('.results ul').html('');
		var search_key=$(this).val();

		if(search_key==''){
			$.each(menu_list,function (_,ele) {
				$('.results.menu ul').append('<li><a href="#'+ele.hash+'">'+ele.menu+'</a></li>')
			})
		}
		var ev_result = event_search.search(search_key);
		var menu_result = menu_search.search(search_key);

		ev_result.map(function(ele){
			var hashUrl = (ele.cat_i+1)+','+(ele.event_i+1);
			$('.results.events ul').append('<li onclick="openEventPage('+hashUrl+')">'+ele.name+'</li>')
		})
		menu_result.map(function(ele){
			$('.results.menu ul').append('<li><a href="#'+ele['hash']+'">'+ele['menu']+'</a></li>')
		})
	})


$('#icon-search').click(function(){
	if(events_processed.length == 0){
		processEvents();
	}
	$('.full-search-wrapper').fadeIn().css({
		'display':'flex'
	});
	$('nav,footer').hide();
})

$('.full-search-wrapper .close-btn').click(function(){
	$('.full-search-wrapper').fadeOut();
	$('.results ul').html('');
	$('#search-input').val('')
	$('nav,footer').show();
});


$('.schedule-title .close-btn').click(function(){
	$('.schedule-wrapper').fadeOut();
	$('nav,footer').show();
	location.hash='';

})

function openEventPage(cat,ev){
	location.hash='events/'+cat+'/'+ev;
}



$('.dashboard-tabs ul li').click(function () {
	$('.dashboard-tabs ul li').removeClass('active');
	$(this).addClass('active');
	var ix=$(this).index();
	console.log(ix);
	$('.dashboard-content').hide();
	$($('.dashboard-content')[ix]).css({
		'display':'flex'
	})
})


function dashboard(){
	var data={};
	data['csrfmiddlewaretoken'] = csrftoken;
	$.ajax({
		method:'POST',
		url:'./api/dashboard/',
		data:data,
		success:function(response){
			var $dashboard=$('.dashboard');
			$dashboard.find('#user_name').html(response.name);
			$dashboard.find('#user_email').html(response.email);
			$dashboard.find('#user_phone').html(response.phone);
			$dashboard.find('#user_college').html(response.college);
			if(response.pcr_approval){
				$dashboard.find('#pcr_status').html('Approved').addClass('status-true');
			}
			else{
				$dashboard.find('#pcr_status').html('Not Approved').addClass('status-false');
			}
			if(response.fee_paid){
				$dashboard.find('#payment_status').html('Completed').addClass('status-true');
			}
			else{
				$dashboard.find('#payment_status').html('Incomplete').addClass('status-false');
			}
			$dashboard.find('input[name=bank_name]').val(response.bank_name);
			$dashboard.find('input[name=bank_account_no]').val(response.bank_account_no);
			$dashboard.find('input[name=bank_ifsc]').val(response.bank_ifsc);
			$dashboard.find('input[name=address]').val(response.address);

			if(response.events.length==0)
				$dashboard.find('.no-register').show();
			else{
				$dashboard.find('.no-register').hide();
				var defaultEventItem = $('.event-list-item.hidden').clone();
				$('.events-list-wrapper').html('');
				$('.events-list-wrapper').append(defaultEventItem);
				response.events.forEach(function(event){
					var eventListItem = $('.event-list-item.hidden').clone();
					eventListItem.removeClass('hidden');
					eventListItem.find('.event-list-name').html('<strong>'+event.event_name+'</strong>');
					eventListItem.find('.event-list-team-name').html(event.team_name);
					eventListItem.find('.event-list-team-code').html(event.team_code);
					var members = '';
					if(event.members)
						event.members.forEach(function(member){
							members +='<span>'+member+' , </span>';
						})

					eventListItem.find('.event-list-team-members').html(members);
					$('.events-list-wrapper').append(eventListItem);
				});
			}

			if(response.fee_paid){
				$('.payment-btn a').hide();
				$('.payment-btn p').show();
			}
			else{
				$('.payment-btn a').show();
				$('.payment-btn p').hide();
			}

		}
	});
	
}




$('#bank-details-submit').click(function (ev) {
	ev.preventDefault();
	data={};
	$('#bank-details-submit').html('Please Wait').addClass('disabled');
	$('#bank-details-form .message').html('');
	$.each($('#bank-details-form').serializeArray(), function(_, kv) {
		  data[kv.name] = kv.value;
	});
	data['csrfmiddlewaretoken'] = csrftoken;
	$.ajax({
		method:'POST',
		url:'./api/update/',
		data:data,
		success:function(response){		
			$('#bank-details-submit').html('UPDATE').removeClass('disabled');
			$('#bank-details-form input').val('');
			$('#bank-details-form .message').html('Bank Details Successfully Updated');
		},
		error:function (response) {
			$('#bank-details-submit').html('UPDATE').removeClass('disabled');
			response=response.responseJSON;
				var message=Object.values(response)[0][0]
			$('#bank-details-form .message').html(message);

		}
	});
});

var schedule = [];

function get_schedule() {
	if(schedule.length == 0)
	$.ajax({
		url:'event/schedule/',
		success:function (response){
			schedule = response;
			schedule.forEach(function(event){
				var $ele = $('.schedule-list-item.hidden').clone();
				$ele.removeClass('hidden');
				$ele.find('.ev-name').html(event.event_name);
				$ele.find('.ev-name').html(event.event_name);
				$ele.find('.schedule-location p').html(event.venue);
				$ele.find('.ev-date').html(event.date);
				$ele.find('.ev-time').html(event.startingtime + ' - ' + event.endingtime);
				$('.schedule-list').append($ele);

			});
		}
	});
}