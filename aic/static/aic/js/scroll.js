var st1 = $("#main").scrollTop();
$("#main").scroll(function(e){
  y = ($(this).scrollTop() - st1 < 0) ? '#landing' : '#statements';
  st1 = $(this).scrollTop();
  console.log(y);
});
