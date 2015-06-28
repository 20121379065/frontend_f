$(function(){	
    $(window).scroll(function() {
        var keyheight = $(document).scrollTop();
        if (keyheight > 300){$('.yapiskan').addClass('gizle');} 
        else {$('.yapiskan').removeClass('gizle');}
     });
});