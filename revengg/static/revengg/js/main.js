/*
stage 0 : before test starts
stage 1 : as soon as start button is clicked, quesanspanel is loaded, timer starts
stage 2 : quit warning.
stage 3 : test ends, button to check score and feedback
stage 4 : check score and feedback
*/
var stage = 0;
/*
holds the response of the user during the session, array of objects having question no and response (a,b,c,d)
*/
var response = []; 


/*
holds the num of the current question
*/
var current = -1;
var set = [];

/*
 gets the questions list
*/ 

$(document).ready(getQuestions);

function getQuestions() {

	$.ajax({
		url:'questions/',
		type:'POST',
		data:{
			csrfmiddlewaretoken:getCookie('csrftoken')
		},
		success:function (response) {
			set = response;
		}
	});


	for(var i = 0;i<set.length;i++) {
		response[i] = { 'num' : (i+1), 'response' : null, 'visited' : false, 'visits' : 0};
	}

}


/*
popullates the question sidebar and add event listeners
*/
function populateQuestionsList() {
	var html = "";
	var cat = "";
	for(obj in set) {
		if(cat != set[obj].cat){
			html += '<div class="ques_cat_head">' + set[obj].cat +'</div>';
			cat = set[obj].cat;
		}
		var qno = "Q. "+set[obj].num;
		var frame = "<button id='q"+set[obj].num+"' value='"+obj+"' class='quesbutton unattempted-ques'>"+qno+"</button>"
		html += frame;
	}
	$("#questionsList").html(html);

	$(".quesbutton").click(function() {
		flushQuestion($(this).attr("value"));
	});
}


/*
Changes to a specific question on the panel 
*/
function flushQuestion(index) {
	var quesEntry = set[index];
	
 	if(quesEntry != null) {

 		var no = Number(index)+1;
	 	$("#qno").html("").append(no);
	 	$("#levelBox").html("").append(set[index].cat);
	 	$(".ms_correct").html("").append(3);
	 	$(".ms_incorrect").html("").append(-1);
	 	$(".ms_unattempted").html("").append(0);

	 	var questionhtml = quesEntry.ques;
	 	if (quesEntry.ques_img != null) {
	 		questionhtml += "<br><img src='"+quesEntry.ques_img+"' />"
	 	}

	 	$("#IOContent").html("");
	 	$("#IOContent").append(questionhtml+"<br><br>");

	 	var optionshtml = ""

	 	for(var j=0;j<quesEntry['options'].length;j++) {
	 		if(quesEntry['options'][j]['type'] == 'text') {
	 			if(response[index].response == j+1)
	 				optionshtml += "<label><input type='radio' checked class='ansradio' name='answer' val='"+index+"' value='"+(j+1)+"'>"+quesEntry['options'][j]['desc']+"</label><br>";
	 			else 
	 				optionshtml += "<label><input type='radio' class='ansradio' name='answer' val='"+index+"' value='"+(j+1)+"'>"+quesEntry['options'][j]['desc']+"</label><br>";
	 		}
	 		else if(quesEntry['options'][j]['type'] == 'image')
	 			if(response[index].response == j)
	 				optionshtml += "<label><input type='radio' checked class='ansradio' name='answer' val='"+index+"' value='"+(j+1)+"'><img src='"+quesEntry['options'][j]['desc']+"'></label><br>";
	 			else 
	 				optionshtml += "<label><input type='radio' class='ansradio' name='answer' val='"+index+"' value='"+(j+1)+"'><img src='"+quesEntry['options'][j]['desc']+"'></label><br>";

	 	}

		$("#IOContent").append(optionshtml);

		current = Number(index);
		response[index].visited = true;
		response[index].visits++;
		updateColorCoding();
	}

	else {
		console.log("call to : "+index);
		console.log("privacy tampered !");
	}

}

function updateColorCoding() {
	for(var i=0;i<set.length;i++) {
		if(i == current) {
			// blue
			$("#q"+(i+1)).css({"background-color" : "#238dd0", "color" : "white"});
		}
		else if(response[i].response != null) {
			// green
			$("#q"+(i+1)).css({"background-color" : "#a9e339", "color" : "black"});
		}
		else if(response[i].visited == true) {
			//red
			$("#q"+(i+1)).css({"background-color" : "#ff2a4d", "color" : "black"});
		}
		else {
			$("#q"+(i+1)).css({"background-color" : "#eee", "color" : "black"});
		}
	}
}

// Timer
var sec;
function renderTime() {
	sec--;
	var secs = sec%60;
	$('#topContainer1').html(parseInt(sec/60)+':'+(secs>9?'':'0')+secs);
	if(sec==0)
	{
		clearInterval(timer);
		$("#quesanspanel").hide();
		$("#feedbackpanel").show();
		stage = 4;
		clearInterval(timer);

		dat = {};
		// dat['score'] = calcScore();
		dat['time'] = $("#topContainer1").html();
		
		for(var i=0;i<set.length;i++) {
			var marked = response[i].response;
			dat[i+1]=marked;
		}		

		dat['csrfmiddlewaretoken']=getCookie('csrftoken');
		
		$(".scoreIs").html(dat['score']);

		//console.log(dat);

		$.ajax({
	 		url : 'submit/',
	 		data : dat,
	 		method : "POST",
	 		success : function(data) {
	 			$(".scoreIs").html(data['score']);
	 		}
	 	});
			
	}
}

function timer_init() {
	// sec = time;
	$('#topContainer1').html('60:00');
  	timer = setInterval("renderTime()", 1000);
}

// Timer End


function calcScore() {
	var score = 0;
	for(var i=0;i<set.length;i++) {
		var marked = response[i].response;
		if(marked == null) {
			score += set[i].scoring[2];
		}
		else if(Number(marked) == set[i].correct) {
			score += set[i].scoring[0];
		}
		else {
			score += set[i].scoring[1];
		}
	}
	return score;
}


function generateRef() {
	var dgt = [2];
	
	dgt[0] = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];
	dgt[1] = ['1','2','3','4','5','6','7','8','9','0'];
	
	var ref = "";
	for(var i = 1;i<=8;i++) {
		var set = parseInt(Math.random()*2);
		var chr = parseInt(Math.random()*dgt[set].length);
		ref += dgt[set][chr];
	}
	return ref;
}


function saveTextAsFile(text) {
	var ref = generateRef();
	text = "REF\t\t\t::\t"+ref+"\n\n"+text;
	var textToWrite = text;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = ref+".txt";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}


function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

var dat;


// using jQuery
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


function validateFields(data){
	$('#user_message h6').html('');
    var email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phone_reg = /^[0]?[789]\d{9}$/;
    if(data['team_name'].length<4){
    	console.log(1);
    	$('#user_message h6').html('Team Name must have atleast 4 characters');
    	return false;
    }
    if(!email_reg.test(data['email'])){
    	$('#user_message h6').html('Invalid Email Address');
    	return false;
    }
    if(!phone_reg.test(data['phone'])){
    	$('#user_message h6').html('Invalid Phone Number');
    	return false;
    }
    return true;
}


/*
Start button click event.
*/
$('#next_instr').click(function() {
	$('#stu_instr').fadeOut();
	$('#stu_det').fadeIn();
})
$("#start_test").click(function() {
	if($(this).hasClass('disable_start'))
	{
		return;
	}

	dat = {
		'team_name' : $("#feedbackTeamName").val(),
		'name' : $("#feedbackName").val(),
		'phone' : $("#feedbackPhone").val(),
		'email' : $("#feedbackMail").val(),
 	}

 	if(validateFields(dat)){

	 	$.ajax({
	 		url : 'create/',
	 		data : dat,
	 		method : "POST",
	 		success : function(data) {
	 			if(data.status == 0 ){
	 				$('#user_message h6').html(data.message);
	 				return;
	 			}
	 			else{
		 			$("#start_panel").hide();
		 			getQuestions();
					populateQuestionsList();
					flushQuestion(0);
					$("#quesanspanel").show();
					stage = 1;
					if(data['time']){
						var time_split = data.time.split(':');
						sec = (parseInt(time_split[0])*60)+parseInt(time_split[1]);
					}
					else
						sec = 3600;
					// start the timer and set up handler to update clock.
					timer_init();
	 				
	 			}
	 			//console.log(data);
	 		}
	 	});
 		
 	}

	
});
$(document).on('keyup',"#detSubmit input", function() {
	var filled =true;
	$("#detSubmit input").each(function() {
        if(!($(this).val().length > 0)) {
            filled=false;
        }
    });
    if(filled)
    {
    	$('#start_test').removeClass('disable_start');
    }
    else{
    	$('#start_test').addClass('disable_start');
    }
})

/*
quit test button
*/
$("#quitTest").click(function() {
	if(stage == 1) {
		// $("#quesanspanel").hide();
		$("#warnquitpanel").show();
		stage = 2;
	}
});

/*
quit test button
*/
$("#quizSubmit").click(function() {
	if(stage == 1) {
		// $("#quesanspanel").hide();
		$("#warnsubmitpanel").show();
		stage = 2;
	}
});



/*
warn page return button, brings you back to test.
*/
$("#warnquitreturn").click(function() {
	if(stage == 2) {			
		// $("#quesanspanel").show();
		$("#warnquitpanel").hide();
		stage = 1;
	}
});


/*
warn page return button, brings you back to test.
*/
$("#warnsubmitreturn").click(function() {
	if(stage == 2) {			
		// $("#quesanspanel").show();
		$("#warnsubmitpanel").hide();
		stage = 1;
	}
});


/*
irrationally quits the game, go home you are drunk.
*/
$("#warnquitconfirm").click(function() {
	if(stage == 2) {
		$("#quesanspanel").hide();
		$("#warnquitpanel").hide();
		//$("#testendpanel").show();
		$("#feedbackpanel").show();
		stage = 4;
		clearInterval(timer);

		dat = {};
		// dat['score'] = calcScore();
		dat['time'] = $("#topContainer1").html();

		dat['csrfmiddlewaretoken']=getCookie('csrftoken');

		for(var i=0;i<set.length;i++) {
			var marked = response[i].response;
			dat[i+1]=marked;
		}

		console.log(dat);
		$.ajax({
 		url : 'submit/',
 		data : dat,
 		method : "POST",
 		success : function(data) {
 			$(".scoreIs").html(data['score']);
 		}
 	});
	}
	// stop timer.
});


/*
calculates score, useless !!!
*/
/*$("#scorecalcbutton").click(function() {
	if(stage == 3) {
		var thescoreis = calcScore();
		$(".scoreIs").html(thescoreis);
		$("#testendpanel").hide();
		$("#feedbackpanel").show();
		stage = 4;
	}
});*/



/*
downloads the feedback and student info !
*/
$("#feedbackSubmit").submit(function(e) {
	e.preventDefault();
	console.log("yo");
	if(stage == 4) {
		var info = {};
		info['name'] = $("#feedbackName").val();
		info['school'] = $('#feedbackSchool').val();
		info['mail'] = $("#feedbackMail").val();
		info['phno'] = $("#feedbackPhno").val();
		info['feed'] = $("#feedbackField").val();
		info['score'] = calcScore();
		var text = "Name \t\t::\t"+info['name']+"\nSchool \t\t::\t"+info['school']+"\nEmail \t\t::\t"+info['mail']+"\nPhone\t\t::\t"+info['phno']+"\nFeedback \t::\t"+info['feed']+"\n\nScore \t\t::\t"+info['score'];
		saveTextAsFile(text);
		$(".feedback_form").html("Thank You !");
	}
});






/*
quesanspanel button functionalities
*/
$("#back").click(function() {
	if(current == 0)
		flushQuestion(set.length - 1);
	else
		flushQuestion(current-1);
});


$("#skip").click(function() {
	flushQuestion(((current+1)%(set.length)));
});

$("#save").click(function() {
	var ans = $("input:checked").val()
	if(ans == undefined) {
		response[current].response = null;
	}
	else {
		response[current].response = Number(ans);
	}

	flushQuestion(((current+1)%(set.length)));	
});