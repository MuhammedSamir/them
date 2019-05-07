//....set of navbar......//

$(document).ready(function(){
   //hide .navbar first
    $(".navbar2").hide();
    // fade in .navbar
    $(function(){
       $(window).scroll(function () {
          //set distance user needs to scroll before we start fadIn
           if($(this).scrollTop() > 70) {
               $('.navbar2').fadeIn();
           } else {
               $('.navbar2').fadeOut();
           }
       }); 
    });
});


  //.......... set of progress-bar...........//

$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
          //set distance user needs to scroll before we start progress-bar
          
           if($(this).scrollTop() > 500) {
               $('.pru .pro').animate({
                       width:'92%' },1000);
                   }
           
           else {
               $('.pru .pro').animate({
                       width:'92%' },1000);
                
                   }
           });
       }); 
    });



$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
         //set distance user needs to scroll before we start progress-bar        
           if($(this).scrollTop() > 500) {
               $('.pru .pro2').animate({
                       width:'84%' },2000);
                  
               }
           
           else {
               $('.pru .pro2').animate({
                       width:'84%' },2000);
              }
           });
       }); 
    });

$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
           //set distance user needs to scroll before we start progress-bar
          
           if($(this).scrollTop() > 500) {
               $('.pru .pro3').animate({
                       width:'88%' },3000);
                  
               }
           
           else {
               $('.pru .pro3').animate({
                       width:'88%' },3000);
               }
           });
       }); 
    });
$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
          //set distance user needs to scroll before we start progress-bar
         
           if($(this).scrollTop() > 500) {
               $('.pru .pro4').animate({
                       width:'86%' },4000);
                  
               }
           
           else {
               $('.pru .pro4').animate({
                       width:'86%' },4000);
                }
           });
       }); 
    });




