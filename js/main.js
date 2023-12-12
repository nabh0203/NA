$(document).ready(function(){
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.TextBox1, .TextBox2, .TextBox3, .TextBox4, .TextBox5, .TextBox6, .TextBox7, .TextBox8, .TextBox9').each(function () {
            var elementTop = $(this).offset().top - 100;
            var elementHeight = $(this).height();

            // Check if this element is within viewport
            if ((elementTop + elementHeight > scrollTop) && (elementTop < scrollTop + windowHeight)) {
                $(this).addClass('slide-up');
            }
        });
    });
    $('#lineimg img').click(function(){
        var img_src = $(this).attr('src');
        $('.mainimg img').fadeOut(300, function(){
            $(this).attr('src', img_src).fadeIn(300);
        });
    });

    $('#lineimg-2 img').click(function(){
        var img_src = $(this).attr('src');
        $('.mainimg-2 img').fadeOut(300, function(){
            $(this).attr('src', img_src).fadeIn(300);
        });
    });
});
