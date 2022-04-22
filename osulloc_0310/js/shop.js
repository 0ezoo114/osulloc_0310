'use strict';

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle(400);
  });
    
    
    $('.view-A> a').on('click',function(e){
        console.log('dd');
        e.preventDefault();
        $('.secView').slideToggle();
    });
    
    
    
    
});

