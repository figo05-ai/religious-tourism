$(document).ready(function(){

	"use strict";
	window.scrollTo(0, 0);
	$('html, body').scrollTop(0);

    

        /*==================================

* Author        : "ThemeSine"

* Template Name : Travel HTML Template

* Version       : 1.0

==================================== */


        /*=========== TABLE OF CONTENTS ===========

1. Scroll To Top
2. Range js
3. Countdown timer
4. owl carousel
5. datepicker
6. Smooth Scroll spy
7. Animation support
======================================*/
    

    // 1. Scroll To Top 

		$(window).on('scroll',function () {

			if ($(this).scrollTop() > 600) {

				$('.return-to-top').fadeIn();

			} else {

				$('.return-to-top').fadeOut();

			}

		});

		$('.return-to-top').on('click',function(){

				$('html, body').animate({

				scrollTop: 0

			}, 1500);

			return false;

		});

    // 2. range js
        function getCurr() {
            return (document.documentElement.getAttribute('lang') === 'ar') ? ' ج.م' : ' EGP';
        }
        
        $( "#slider-range" ).slider({
            range: true,
            min: 65000,
            max: 250000,
            values: [ 85000, 180000 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ].toLocaleString() + getCurr() + " - " + ui.values[ 1 ].toLocaleString() + getCurr() );
            }
        });
        $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ).toLocaleString() + getCurr() +
        " - " + $( "#slider-range" ).slider( "values", 1 ).toLocaleString() + getCurr() );
        
        $( "#slider-range-hajj" ).slider({
            range: true,
            min: 280000,
            max: 750000,
            values: [ 350000, 550000 ],
            slide: function( event, ui ) {
            $( "#amount-hajj" ).val( ui.values[ 0 ].toLocaleString() + getCurr() + " - " + ui.values[ 1 ].toLocaleString() + getCurr() );
            }
        });
        $( "#amount-hajj" ).val( $( "#slider-range-hajj" ).slider( "values", 0 ).toLocaleString() + getCurr() +
        " - " + $( "#slider-range-hajj" ).slider( "values", 1 ).toLocaleString() + getCurr() );
        
        $( "#slider-range-ziyarat" ).slider({
            range: true,
            min: 55000,
            max: 180000,
            values: [ 65000, 130000 ],
            slide: function( event, ui ) {
            $( "#amount-ziyarat" ).val( ui.values[ 0 ].toLocaleString() + getCurr() + " - " + ui.values[ 1 ].toLocaleString() + getCurr() );
            }
        });
        $( "#amount-ziyarat" ).val( $( "#slider-range-ziyarat" ).slider( "values", 0 ).toLocaleString() + getCurr() +
        " - " + $( "#slider-range-ziyarat" ).slider( "values", 1 ).toLocaleString() + getCurr() );
        
        
        // Quantity Buttons Shop
    
        $(".qtyplus").on("click", function(){
        var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) + 1,
                d = parseInt(b.attr("max"), 10);
            d || (d = 9999999999), c <= d && (b.val(c), b.change())
        });
        $(".qtyminus").on("click", function(){
            var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) - 1,
                d = parseInt(b.attr("min"), 10);
            d || (d = 1), c >= d && (b.val(c), b.change())
        });


    // 3.Countdown timer 
        
        function makeTimer() {

                var endTime = new Date("March 1, 2027 00:00:00");            
                var endSec = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var nowSec = (Date.parse(now) / 1000);

                if (endSec <= nowSec) {
                    endSec = nowSec + (45 * 86400) + (11 * 3600) + (20 * 60);
                }

                var timeLeft = endSec - nowSec;

                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < 10) { hours = "0" + hours; }
                if (minutes < 10) { minutes = "0" + minutes; }
                if (seconds < 10) { seconds = "0" + seconds; }

                var isAr = (localStorage.getItem('nuralharamain_lang') || 'en') === 'ar' || document.documentElement.getAttribute('dir') === 'rtl';
                var lblDays = isAr ? 'أيام' : 'Days';
                var lblHours = isAr ? 'ساعة' : 'Hours';
                var lblMins = isAr ? 'دقيقة' : 'Minutes';
                var lblSecs = isAr ? 'ثانية' : 'Seconds';

                $("#days").html(days + '<span class="camp">' + lblDays + '</span>');
                $("#hours").html(hours + '<span class="camp">' + lblHours + '</span>');
                $("#minutes").html(minutes + '<span class="camp">' + lblMins + '</span>');
                $("#seconds").html(seconds + '<span class="camp">' + lblSecs + '</span>');       

        }
        
        setInterval(function() { makeTimer(); }, 1000);

    // 4. owl carousel
    
        // i. #testimonial-carousel
        window.initTestimonialCarousel = function() {
            var owl = $('#testemonial-carousel');
            if (!owl.length || typeof owl.owlCarousel !== 'function') return;

            var isRtl = document.documentElement.getAttribute('dir') === 'rtl';

            // Destroy existing instance if present
            if (owl.hasClass('owl-loaded')) {
                owl.trigger('destroy.owl.carousel');
                owl.removeClass('owl-loaded owl-hidden owl-rtl owl-ltr');
                owl.find('.owl-stage-outer').children().unwrap();
                owl.find('.owl-item.cloned').remove();
                owl.removeData('owl.carousel');
                owl.find('.home1-testm').removeAttr('style');
            }

            owl.owlCarousel({
                items: 3,
                margin: 0,
                rtl: isRtl,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplaySpeed: 700,
                smartSpeed: 700,
                fluidSpeed: 700,
                dots: true,
                autoplayHoverPause: false,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    640: { items: 1 },
                    992: { items: 3 }
                }
            });

            setTimeout(function() {
                owl.trigger('refresh.owl.carousel');
                window.dispatchEvent(new Event('resize'));
            }, 150);

            // Guarantee autoplay never stops after user interactions
            owl.off('mouseleave touchend translated.owl.carousel').on('mouseleave touchend translated.owl.carousel', function() {
                owl.trigger('play.owl.autoplay', [2500, 700]);
            });
        };

        window.initTestimonialCarousel();

    // 5. datepicker
            $('[data-toggle="datepicker"]').datepicker();

    // 6. Smooth Scroll spy
        
        $('.header-area').sticky({
           topSpacing:0
        });
        
        //=============

        $('li.smooth-menu a').bind("click", function(event) {
            event.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - -1
            }, 1200,'easeInOutExpo');
        });
        
        $('body').scrollspy({
            target:'.navbar-collapse',
            offset:0
        });

    // 7.animation support
        $(window).load(function(){
            window.scrollTo(0, 0);
            $('html, body').scrollTop(0);
        });
        

});	

	