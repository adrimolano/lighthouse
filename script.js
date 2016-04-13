$(document).ready(function(){
    $("button").click(function(){
        $("#photos").toggle();
    });

$('li').click(function(){
 $(this).css("text-decoration", "line-through");
});

 $('.single_dir').click(function() {
$(this).toggleClass('completed');  
});
});
