(function($){
   $(function(){
      
       /* Scroll to sections */
       $(".jq--scroll-about-us").click(function(){
          $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 1500); 
       });
       
       $(".jq--scroll-our-services").click(function(){
          $("html, body").animate({scrollTop: $(".jq--our-services").offset().top}, 1500); 
       });
       
       $(".jq--scroll-reference").click(function(){
          $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 2000); 
       });
       
       $(".jq--scroll-photo-gallery").click(function(){
          $("html, body").animate({scrollTop: $(".jq--photo-gallery").offset().top}, 2500); 
       });
       
       $(".jq--scroll-contact-form").click(function(){
          $("html, body").animate({scrollTop: $(".jq--contact-form").offset().top}, 3000); 
       });
       
       /* Scroll to sections */
       $(".jq--scroll-button-first").click(function(){
          $("html, body").animate({scrollTop: $(".jq--our-services").offset().top}, 1500); 
       });
       
       $(".jq--scroll-button-second").click(function(){
          $("html, body").animate({scrollTop: $(".jq--photo-gallery").offset().top}, 2500); 
       });
       
        /* Mobile navigation */
      $(".jq--nav-icon").click(function(){
         $(".nav-background").slideToggle();
         $(".mobile-nav-back").fadeToggle();
         $("nav ul").fadeToggle();
      }); 
       
        /* Change hamburger to cross vice versa */
      $(".jq--image-hamburger").click(function(){
          
          if($(".jq--image-hamburger").attr("src") == "images/hamburgerMenu.png")
          {
              $($(".jq--image-hamburger").attr("src","images/crossMenu.png"));
          }
          else
          {
              $($(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
          }
      });
       
   }); 
})(jQuery);