var categories = [];

var site_year = 2017;
var events_summary = [];
 var category_list = $('#events-inner ul li');
var events_list, event_data;
var faicon = {
    'Sponsors': 'rupee',
  'FAQs': 'question',
  'Resources': 'link',
  'Rules': 'list',
  'Problem Statements': 'file-text',
  'Specifications': 'gear',
  'Materials': 'wrench',
  'Sample Questions': 'check-square-o',
  'Guidelines': 'info',
  'Registration Details': 'database',
  'Judging Criteria': 'gavel',
  'Eligibilty': 'check',
  'Overview': 'circle-o',
  'Register':'pencil'
}


function get_events_summ() {
  $.ajax({
    url: 'event/',
    method: "GET",
    success: function (data) {
      events_summary = data;
      get_categories();
     if (location.hash.includes('events')) {
        openEventsPage();
      }
      processEvents();
    }
  });
}

get_events_summ();

function openEventsPage(){
    code = getEventCode(location.hash);
      if(code.length!=0 ){
          try{
        if(code[0]<5)
          $('#events-inner li:nth-of-type('+(parseInt(code[0])+1)+') a').click();
        else if(code[0]>=5)
          $('#events-inner li:nth-of-type('+(parseInt(code[0])+2)+') a').click();

           openEventItem(code[1]);
         }catch(err){
          
         }
     }
}

function openEventItem(i){
  console.log(3);
    $('.event-details').hide()
    var eleH = ($('.portfolio-items').height()/$('.portfolio-item').length)
      $('.panel2').animate({
        scrollTop: (155*(i-1))
      },200);
      setTimeout(function(){
        $('.portfolio-item:nth-of-type('+i+') a').click();
      },100);
}


var cat_list = [
  {
    name:'Miscellaneous',
    primary_color:'#fd9b96',
    secondary_color:'#da3c15'
  },
  {
    name:'Automation',
    primary_color:'#4f6177',
    secondary_color:'#c3d7d7'
  },
  {
    name:'Develop & Discover',
    primary_color:'#741826',
    secondary_color:'#f7bda0'
  },
  {
    name:'Economania',
    primary_color:'#f6d499',
    secondary_color:'#66e2dc'
  },
  {
    name:'Build & Design',
    primary_color:'#f5ce8b',
    secondary_color:'#8091af'
  },
  {
    name:'Code & Stimulate',
    primary_color:'#58ca77',
    secondary_color:'#8deda6'
  },
  {
    name:'Online Events',
    primary_color:'#7ed6c4',
    secondary_color:'#a1dfd2'
  },
  {
    name:'Quizzes',
    primary_color:'#25C0CF',
    secondary_color:'#c9cbca'
  },
]


function gen_category_list(){
  // $('#category-list .category:not(.hidden)').remove();
  for(var i=0;i<9;i++){
    
    if(i<4){
      var $ele = $('.category.hidden').clone();
      $ele.removeClass('hidden');
      $ele.find('.word').html(cat_list[i].name);
      $('#category-list').append($ele);
      $ele.css({
        'background':'url("/2017/static/main/img/eventcovers/'+cat_list[i].name+'.jpg")',
        'background-size':'cover',
        'background-position':'center'
      })
      $ele.find('.splash').css({
        'background':cat_list[i].primary_color
      })
      
    }
    else if(i>4){
      var $ele = $('.category.hidden').clone();
      $ele.removeClass('hidden');
      $ele.find('.word').html(cat_list[i-1].name);
      $('#category-list').append($ele);
      $ele.css({
        'background':'url("/2017/static/main/img/eventcovers/'+cat_list[i-1].name+'.jpg")',
        'background-size':'cover',
        'background-position':'center'
      })
      $ele.find('.splash').css({
        'background':cat_list[i-1].primary_color
      })
    }
    else{
       var $ele = $('.category.hidden').clone();
      $ele.removeClass('hidden');
      $ele.find('.word').html('Events');
      $ele.find('.word').addClass('no-animate');
      $('#category-list').append($ele);
    }
  }
}


gen_category_list();



$('.events-trigger').click(function(){
    $('.content-wrapper-psuedo').css({
       top: $(this).offset().top+'px',
       left:$(this).offset().left+'px'
    });
    $('.events-wrapper').css({
      'z-index':'930'
    })
    setTimeout(function(){

    $('.content-wrapper-psuedo').css({
       'transform':'translate(-50%,-50%) scale(1)'
    })
    },100)
    setTimeout(function(){
        $('.content-wrapper-psuedo').fadeOut(600);
         $('.content-wrapper').fadeIn(1000);
         $('#events-inner ul li').fadeIn(800);
        setTimeout(function(){
          $('#events-inner ul li').addClass('move-list');
        },150);
    },100);
  })


$('.events-wrapper .icon-search').click(function(){
	if(events_processed.length == 0){
		processEvents();
	}
	$('.events .icon-close').click();
	$('.full-search-wrapper').fadeIn();
})

$('.events .icon-close').click(function(){
 

  $('.content-wrapper-psuedo').show().css({
        left: '0',
        top:'0'
  });

    $('#events-inner ul li').fadeOut()
     $('.content-wrapper').fadeOut();
    setTimeout(function(){
      $('.content-wrapper-psuedo').css({
       'transform':'translate(-50%,-50%) scale(0)'
     });
    },100);

     $('.litebox > div').css({
    transform: 'scaleY(0)',
    transition: 'all 200ms linear'
  })

  setTimeout(function () {
    $('.litebox').hide()
  }, 210);

  setTimeout(function(){
      $('#events-inner ul li').removeClass('move-list')
   $('.content-wrapper').hide();
       $('.events-wrapper').css({
      'z-index':'500'
    })
     },1000);

});





$('#events-inner ul li')
  .mouseover(function () {
    $(this).find('.splash').css({
     transform: 'translateY(-50%) translateX(-50%) scale(20)',
      opacity:'0.9'
    })

    $(this).find('.link_nav header h1 span ').addClass('animate-span')
     $(this).find('span.underline').addClass('expanded');
      $(this).find('header').css({
            background: 'rgba(0,0,0,0.5)'
      })

  })
  .mouseout(function () {
    $(this).find('.splash').css({
      transform: 'translateY(-50%) translateX(-50%) scale(1)',
      opacity:'0'
    })
    $(this).find('.link_nav header h1 span ').removeClass('animate-span')
   $(this).find('span.underline').removeClass('expanded');

   $(this).find('header').css({
            background: 'none'
          });
  })



$.each($('#events-inner ul li'),function(i,ele){
  $(ele).css({
    'transition-delay':(i*0.03)+'s'
  })
});





var curr_cat;

function get_cat_index(name,arr){

  var ix=-1;

  $.each(arr,function(i,ele){
    if(ele.name == name)
     ix=i;

  });

  return ix;
}


$('#events-inner li a').click(function() {
  cat_name = $(this).closest('li').find('.word').html().replace('&amp;','&');
  curr_cat_self = get_cat_index(cat_name,cat_list);
  set_event_description_page(curr_cat_self);
  $('.litebox').show();
  $('.litebox > div').css({
    transform: 'scaleY(1)',
    transition: 'all 200ms linear'
  })
  
})

$(function () {
  $(' #cat-thumbs > li ').each(function () {
    $(this).hoverdir();
  });
});

function applyEventAnim() {

  $('.portfolio-item a').mouseenter(function () {
    if ($(this).parent().find('.event-details').is(':hidden')) {
      $(this).find('.bg').css('transform', 'scale(1.05)');
      if (window.innerWidth > 780) {
        $(this).find('.logo').css('top', '35%');
        $(this).find('.short-desc').fadeIn(200);
      }
    }
  }).mouseleave(function () {
    $(this).find('.bg').css('transform', 'scale(1)');
    $(this).find('.logo').css('top', '50%');
    $(this).find('.short-desc').fadeOut(200);
  })

}

  $('.portfolio-item a').click(function () {
   
    $(this).find('.bg').css({
      transform: 'scale(1)',
      //    transform: 'scaleX(3)'
    });
    $('.event-details:visible').animate({
      height: 'toggle'
    });
    $(this).parent().find('.event-details').animate({
      height: 'toggle'
    });
     get_event($(this).data("id"));
    $('.litebox > div').css('transform', 'scaleY(1)');
   
    setTimeout(function () {
      $('.litebox').show();
    }, 800);
  })

$('.menuButton').click(function () {
  $('.litebox > div').css({
    transform: 'scaleY(0)',
    transition: 'all 200ms linear'
  })

  setTimeout(function () {
    $('.litebox').hide()
  }, 210);

})

$('.downArrow, .icon-search').mouseenter(function () {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '0px');
}).mouseleave(function () {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '-438px');
})

$('.upArrow, .icon-close').mouseenter(function () {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '0px');
}).mouseleave(function () {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '-438px');
})


$('.upArrow').click(function() {
    var ix = curr_cat_self-1;
    var previx=ix%8<0?ix+8:ix;
    set_event_description_page(previx);
   

  })


$('.downArrow').click(function() {
    var ix = curr_cat_self+1;
    var nix = ix%8;
    set_event_description_page(nix);
  })


function set_event_description_page(ix){
    curr_cat_self = ix;
    cat_name = cat_list[ix].name;
    curr_cat = get_cat_index(cat_name,categories);
   var primary_color =  cat_list[ix].primary_color;
     var secondary_color =  cat_list[ix].secondary_color;
    $('.panel1').css({
      'background':'url("/2017/static/main/img/eventcovers/'+cat_name+'.jpg")',
      'background-size':'cover',
      'background-position':'center top'
    })
  $('.lhead').html(cat_name);
  setTimeout(function(){
    $('.portfolio-item .bg.primary_color').css('background-color',primary_color);
    $('.portfolio-item .bg.secondary_color').css('background-color',secondary_color);
  },100)
  get_short_event(curr_cat);


}




// events data  




function getEventCode(str){
    var tmp = str.indexOf('/');
    var query = str.substr(tmp+1);
    var code = query.split('/');
    return code;
}



function get_categories() {
  for (var i = 0; i < events_summary.length; i++) {
    var category = {
      name: events_summary[i].category,
      cat_id: i
    }

    categories.push(category);
  }
}


function get_short_event(cat_id) {
  events_list = [];
  for (var i = 0; i < events_summary[cat_id].events.length; i++) {
    var event = {
      id: events_summary[cat_id].events[i].id,
      name: events_summary[cat_id].events[i].name,
      tags: events_summary[cat_id].events[i].tags,
      venue: (events_summary[cat_id].events[i].schedule!=undefined)?events_summary[cat_id].events[i].schedule.venue:'NA',
      date: (events_summary[cat_id].events[i].schedule!=undefined)?events_summary[cat_id].events[i].schedule.date:'NA',
      start_time: (events_summary[cat_id].events[i].schedule!=undefined)?events_summary[cat_id].events[i].schedule.startingtime:'NA',
      short_desc: (events_summary[cat_id].events[i].short_description.length>170)?events_summary[cat_id].events[i].short_description.substr(0,170)+'...':events_summary[cat_id].events[i].short_description.substr(0,130)
    }
    events_list.push(event);
    generate_events(events_list);
  }
}



function generate_events(events_list) {
  var htmls='';
  for (var i=0; i<events_list.length; i++) {
    if(i%2==0)
      color_type='primary_color'
    else
      color_type='secondary_color'

     htmls += '<li class="portfolio-item" data-skill="design,animation,dev" data-opacity="0.8"> <a href="#" data-id="'+events_list[i].id+'"> <div class="wrapper-bloc"> <h2><span class="logo">'+events_list[i].name+'</span><span class="bg '+color_type+'" data-color=""></span> </span></h2> <p class="short-desc">'+events_list[i].short_desc+'</p></div> <div class="wrapper-desc"><span class="border-left"></span><span class="border-middle"></span> <time>'+events_list[i].date+' '+events_list[i].start_time+'</time> <span class="title">'+events_list[i].venue+'</span></div> </a> <div class="event-details" id="event-'+events_list[i].id+'"> </div> </li>';
    
  }
    $('.portfolio-items').html(htmls);
    applyEventAnim();
    $('.portfolio-item a').click(function () {
    get_event($(this).data("id"));
    $(this).find('.bg').css({
      transform: 'scale(1)',
      //    transform: 'scaleX(3)'
    });
      var that = $(this);
    setTimeout(function () {
   
      that.parent().find('.event-details').animate({
        height: 'toggle'
      });
    }, 500)
    $('.litebox > div').css('transform', 'scaleY(1)');
    setTimeout(function () {
      $('.litebox').show();
    }, 800);
  })
}

function get_event(eventid) {
  $.ajax({
    url: 'event/' + eventid,
    method: "GET",
    success: function (data) {
      event_data = data;
      genrate_details(event_data);
      applyEventAnim();
      
    }
  });
}


function genrate_details (event) {
  var html = '';
  html += '<div class="event-sidemenu">';
    for (var i=0; i<event.headings.length; i++) {
      html += '<div class="eve_det_ico" data-eve_id="'+event.id+'"  data-eve_type="'+Object.keys(event.headings[i])[0]+'" onclick="replaceDetails(this, '+i+')"> <div class="ico_name">'+Object.keys(event.headings[i])[0]+'<div></div> </div><i class="fa fa-'+faicon[Object.keys(event.headings[i])[0]]+'"></i></div>';
    }
  html += '<div class="eve_det_ico" data-eve_id="'+event.id+'"  data-eve_type="Register" onclick="replaceDetails(this,'+event.headings.length+')"> <div class="ico_name">Register<div></div> </div><i class="fa fa-pencil"></i></div>';
  html += '</div><div class="event-desc" id="desc-'+event.id+'">'+event.headings.map(function(e, i) {return (Object.keys(e)[0]=="Overview")?Object.values(e)[0]:event.short_description})+'</div>';
  $('#event-'+event.id).html(html);
}



function replaceDetails(el, key) {
  var id = $(el).data("eve_id");
  var type = $(el).data("eve_type");
  if(type == 'Register')
      $('#desc-'+id).html('<div class="team-reg-wrapper"><div class="team-reg-option create-team"><p class="team-reg-msg">To register a new team for this events</p> <div class="input-field"><input placeholder="Team Name" id="team-name"/><p class="team-reg" id="createTeam" onclick="createTeam('+id+')">Create Team</p></div><p class="msg"> </p></div><div class="team-reg-option join-team"><p class="team-reg-msg">To join an existing team</p><div class="input-field"><input placeholder="Team Code" id="team-code"/><p class="team-reg" id="joinTeam" onclick="joinTeam('+id+')">Join Team</p></div><p class="msg"> </p></div></div>');
  else
      $('#desc-'+id).html(event_data.headings[key][type]);
}


function createTeam (id) {
  var name = $('#team-name').val();
  $('.create-team .msg').html('');
  $.ajax({
    url:'./api/createTeam/'+id+'/',
    type:'POST',
    data:{
      name:name
    },
    success:function (response){
      if(response.status == 0)
        $('.create-team .msg').html(response.message);
      else
        $('.create-team .msg').html('Successfully Registered for this Event.<br> Team Code:'+response.code);
    }
  })
}

function joinTeam (id) {
  var code = $('#team-code').val();
  $('.join-team .msg').html('');
  $.ajax({
    url:'./api/joinTeam/'+id+'/',
    type:'POST',
    data:{
      code:code
    },
    success:function (response){
      $('.join-team .msg').html(response.message);
    }
  });
}