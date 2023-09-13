(function($) {

// ===============================================
// MENU
// ===============================================
$(function() {
    $('#nav-expander').css('cursor','pointer');
    $('#nav-expander').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
        $('.nav-expander').toggleClass('is-active');
    });
}); 


// ===============================================
// MOBILE SUBMENU
// ===============================================
$('.news-filter .filter-label').click(function() {
    $(this).toggleClass('open');
});


// ===============================================
// FILTER TOGGLE
// ===============================================
$('.sitenav .menu-item-has-children .sub-toggle').click(function() {
    $(this).toggleClass('open');
    $(this).parent().find('.sub-menu').slideToggle('fast');
});


// ===============================================
// STICKY HEADER / SIDEBAR
// ===============================================
jQuery(document).ready(function($) {
    var stickyHead = function() {
        $('.header.sticky').toggleClass('on', $(document).scrollTop() > 25);
    }
    stickyHead();
    $(window).on('scroll touchmove', stickyHead);
});
 

// ===============================================
// FLOATING HEADER
// ===============================================
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header.floating').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


// -----------------------------------------------------------------------------
// tab
// -----------------------------------------------------------------------------
var url = document.URL;
var hash = url.substring(url.indexOf('#'));

$(".kt-tabs-wrap").find("li > a").each(function(key, val) {
    if (hash == $(val).attr('href')) {
        $(val).click();
    }
    
    $(val).click(function(ky, vl) {
		var scrollTop = $(window).scrollTop();
        location.hash = $(this).attr('href');
		$(window).scrollTop(scrollTop);
		
    });
	
	$(".kt-tabs-wrap > a").click(function(e) {
		e.preventDefault();
	});
});

 
// TABS
	$('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');
 
    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');
 
    $content = $($active[0].hash);
 
    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });
 
    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();
 
      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);
 
      // Make the tab active.
      $active.addClass('active');
      $content.show();
 
      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

	
	
	
	
	
// -----------------------------------------------------------------------------
// b2t
// -----------------------------------------------------------------------------
jQuery(document).ready(function($){
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
 
//hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }     });
 
//smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
             }, scroll_top_duration
        );
    });
});
 
 
// -----------------------------------------------------------------------------
// slider
// -----------------------------------------------------------------------------
$('.slider').slick({
	dots: false,
	arrows: false,
	infinite: true,
	fade: true,
	cssEase: 'linear',
	adaptiveHeight: false,
	autoplay: false,
	//autoplaySpeed: 7500,
	//speed: 1100,
});



// -----------------------------------------------------------------------------
// number animation
// -----------------------------------------------------------------------------
$( '.counter' ).waypoint( function () {
	//$(this).addClass('viewed');
	$(this.element).addClass("in-view");
	
	$( '.count' ).countTo( {
		speed: 1000,
		formatter: function ( value, options ) {
			value = value.toFixed( options.decimals );
			value = value.replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
			return value;
		}
	} );
	
}, { offset: '100%' } );


// -----------------------------------------------------------------------------
// same height blocks
// -----------------------------------------------------------------------------
equalheight = function(container) {

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

var $window = $(window);



// --- priorities
$(window).load(function() {
    if ($window.width() > 782) {
        equalheight('.equal');
    };
});

$(window).resize(function() {
    if ($window.width() > 782) {
      equalheight('.equal');
      
    } else {
        $('.equal').css('height','auto');
        
    };
});


// -----------------------------------------------------------------------------
// IFRAME RESIZE
// -----------------------------------------------------------------------------
window.addEventListener('message', function(event) {
	var frames = document.getElementsByTagName('iframe');
    for (var i = 0; i < frames.length; i++) {
        if (frames[i].contentWindow === event.source) {
            $(frames[i]).height(event.data);
            break;
        }
    }
});

function resize() {
  window.addEventListener('message', function(event) {
      var frames = document.getElementsByTagName('iframe');
      for (var i = 0; i < frames.length; i++) {
          if (frames[i].contentWindow === event.source) {
              $(frames[i]).height(event.data);
              break;
          }
      }
  });
}

$('.vc_tta-tab').click(function() {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if( isSafari ) {
      resize();
  }
});


// -----------------------------------------------------------------------------
// team toggle
// -----------------------------------------------------------------------------
$(function() {
    $('.team-head').click(function(){
        $('.open').removeClass('open');
		$('.fade').removeClass('fade');
		
        if(false == $(this).next().is(':visible')) {
            $('.team-bio').slideUp('normal');
            $(this).addClass('open');
			$(this).parent().toggleClass('fade');
        }
        $(this).next().slideToggle('normal');
		
		//$(this).parent().toggleClass('fade');
    }); // click
	
	 $(".toggle .team-head").hover(
     function () {
         $(this).parent().addClass("team-over");
		 $(this).addClass("team-member-over");
     }, function () {
         $(this).parent().removeClass("team-over");
		 $(this).removeClass("team-member-over");
     });
	 
});


// -----------------------------------------------------------------------------
// tables
// -----------------------------------------------------------------------------
$('.is-style-stacktable table').stacktable({myClass:'mob-table'});
$('.is-style-stackcolumns table').stackcolumns({myClass:'mob-table cols'});
$('.is-style-cardtable table').cardtable({myClass:'mob-table'});



$('a.wp-block-button__link[href*="#"]:not([href="#"])').click(function() {

	    var offset = -75;
	    
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	        if (target.length) {
	            $('html, body').animate({
	                scrollTop: target.offset().top + offset
	            }, 1000);
	            return false;
	        }
	    }

});


})( jQuery );