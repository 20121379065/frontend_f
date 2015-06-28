 $(document).ready(function() {
    $('a[href*=#]').click(function() {
        var target = $(this.hash);
        if (target.length) {
            var vtop = target.offset().top;
            $('html,body').animate({ scrollTop: vtop }, 1000);
            return false;
        }
    });
});