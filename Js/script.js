(function($){
    $(function(){
        /* Scroll to section */
        $(".jq--scroll-my-service").click(function(){
            $("html, body").animate({scrollTop: $(".jq--my-service").offset().top}, 1000);
        });

        $(".jq--scroll-about-me").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-me").offset().top}, 1500);
        });

        $(".jq--scroll-references").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1500);
        });

        $(".jq--scroll-my-projekts").click(function(){
            $("html, body").animate({scrollTop: $(".jq--my-projekts").offset().top}, 1500);
        });

        $(".jq--scroll-contact-form").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact-form").offset().top}, 1500);
        });

        /* Scroll buttons to section */
        $(".jq--scroll-button-order-services").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact-form").offset().top}, 1500);
        });

        $(".jq--scroll-button-references").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1500);
        });

        /* Mobile navigation */
        $(".jq--nav-icon").click(function(){

            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });

        /* Change hamburger to cross and other way */
        $(".jq--image-hamburger").click(function(){


            if($(".jq--image-hamburger").attr("src") == "Obrazky/menu_button.png")   
            {
                $($(".jq--image-hamburger").attr("src","Obrazky/close_button.png"));
            }
            else
            {
                $($(".jq--image-hamburger").attr("src","Obrazky/menu_button.png"));
            }
        
        });

        /* nav-background-scrolled */
        const headerEl = document.querySelector(".nav-background");

        window.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
            headerEl.classList.add("nav-background-scrolled");
        } else if (window.scrollY <= 50) {
            headerEl.classList.remove("nav-background-scrolled");
        }
        });

         /* contact form - send Btn */

            document.querySelector(".sendBtn").addEventListener("click", function(event){
             event.target.textContent = "ODESLÁNO"

         });   
         
             
  
               
    });
})(jQuery);