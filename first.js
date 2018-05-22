$(document).ready(function(){
   
    $(".content").hide();

 $("#button1").click(function(){

    $("#content1").show(1000);
    $("#content2").hide(1000);
    $("#content3").hide(1000);
});
    

 $("#button2").click(function(){

    $("#content1").hide(1000);
    $("#content2").show(1000);
    $("#content3").hide(1000);
});



 $("#button3").click(function(){

    $("#content1").hide(1000);
    $("#content2").hide(1000);
    $("#content3").show(1000);
});






});
