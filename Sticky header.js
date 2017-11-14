// javaScript and using a point on the screen to toggle
var header = document.getElementById("masthead");
window.addEventListener("scroll", function () {

   if (window.scrollY > 500) {
    header.style.transition = "all 0.5s";
        header.classList.add("sticky-header");
    } else if (window.scrollY<500)  {
        header.classList.remove("sticky-header");
    } else if (window.scrollY < 250){
        header.style.transition = "all 0s";
        header.style.top = 0;
    }
    
});


// With JavaScript and responding to scroll up and down
var header = document.getElementById("masthead");
var previousPosition;
window.addEventListener("scroll", function(){
    var currentPosition = window.scrollY + window.innerHeight;
    
    if (currentPosition>previousPosition) {
        header.classList.add("sticky-header");
    }

    else if (currentPosition<previousPosition){
        header.classList.remove("sticky-header");
    }

    previousPosition=currentPosition;
}
); 



//with jQuery

jQuery(document).ready(function( $ ){

    $(window).scroll(function() {

    if ($(this).scrollTop() > 1){  

        $('site-header').addClass("sticky");

    }

    else{

        $('site-header').removeClass("sticky");

    }

}); 

});
