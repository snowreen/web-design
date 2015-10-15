new Date()
$('html').addClass('js');
//confirm("Are you sure you want to leave this page?");

$(document).ready(function(){
    $("#travels").click(function(){
        $("p").toggle();
    });
});



$(function() {
    $(".dropdown").click(function(){
      $("li").show();
    });
});


