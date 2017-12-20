$(document).on("scroll", function() {

  if($(document).scrollTop()>100) {
    $("#navbar").removeClass("event").addClass("scrool");
  } 
  else {
    $("#navbar").removeClass("scrool").addClass("event");
  }
  
});

$(document).on("scroll", function() {

  if($(document).scrollTop()>1000) {
    $("#event01").addClass("event01");
     $("#event02").addClass("event02");
      $("#event03").addClass("event03");
       $("#event04").addClass("event04");
  } 
  
});