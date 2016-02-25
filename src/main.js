$(document).foundation();
$(function(){
    $("button").click(function(){
       window.location.href="main.html";
    });

    $(".menu button").mouseover(function(){
        $(".menu input").animate({
            width : "50%"
        }, 500, "linear");

    });
    $(".menu button").mouseout(function(){
        $(".menu input").animate({
            width : "90%"
        }, 500, "linear");

    });

});
