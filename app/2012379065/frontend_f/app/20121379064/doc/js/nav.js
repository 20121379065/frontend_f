$(function(){	
	    var cubuk_seviye = $(document).scrollTop();
	    var header_yuksekligi = $('.header').outerHeight();

	    $(window).scroll(function() {
	        var kaydirma_cubugu = $(document).scrollTop();

	        if (kaydirma_cubugu > header_yuksekligi){$('.header').addClass('gizle');} 
	        else {$('.header').removeClass('gizle');}

	        if (kaydirma_cubugu > cubuk_seviye){$('.header').removeClass('sabit');} 
	        else {$('.header').addClass('sabit');}				

	        cubuk_seviye = $(document).scrollTop();	
	     });
	});