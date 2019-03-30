var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos = currentScrollPos) {
  
  document.getElementById("menu").style.background = "#111111";
  document.getElementById("external-menu").style.background = "#111111";
  document.getElementById("menu-list").style.background = "#111111";

} else {
  document.getElementById("menu").style.background = "none";
  document.getElementById("external-menu").style.background = "none";
  document.getElementById("menu-list").style.background = "none";
}
prevScrollpos = currentScrollPos;
}


// -------Scroll------

function scrollNav() {
$('#menu a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 1000);
    return false;
});
$('.scrollTop a').scrollTop();
}
scrollNav();

// ----Modal----

$('#myModal').on('shown.bs.modal', function () {
$('#myInput').trigger('focus')
})

// -------COUNTUP------


$('.counter').counterUp({
  delay: 10,
  time: 3000
});

// -----Slide------

$('.autoplay').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1500,
dots: false,
infinite: true,
fade: true,
cssEase: 'linear',
});

$('.abc').slick({
slidesToShow: 4,
slidesToScroll: 4,
autoplay: true,
autoplaySpeed: 1500,
dots: true,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }

]
});

// -----------

wow = new WOW
({
    animateClass: 'animated',
    offset:100,
    callback:function(box) {
      console.log
      (
        "WOW: animating <" + box.tagName.toLowerCase() + ">"
      )
    }
});
wow.init();
document.getElementById('moar').onclick = function() {
var section = document.createElement('section');
section.className = 'section--purple wow fadeInDown';
this.parentNode.insertBefore(section, this);
};
    
   
    

   