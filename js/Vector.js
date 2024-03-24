$(document).ready(function(){
    var imgCount = $('#Slider img').length;
    var currentIndex = 0;

    $('#RightButton').click(function(){
        currentIndex = (currentIndex + 1) % imgCount;
        $('#Slider').css('transform', 'translateX(' + (-currentIndex * 1080) + 'px)');
        $('#LeftButton').show();
        $(this).hide();
    });

    $('#LeftButton').click(function(){
        currentIndex = (currentIndex - 1 + imgCount) % imgCount;
        $('#Slider').css('transform', 'translateX(' + (-currentIndex * 1080) + 'px)');
        $('#RightButton').show();
        $(this).hide();
    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
    
        $('p, #Logo').not('.ObjectTap *, header *, footer *').each(function () { // '.ObjectTap' 클래스를 가진 요소 안에 있는 요소를 제외합니다
            var elementTop = $(this).offset().top - 100;
            var elementHeight = $(this).height();
    
            // Check if this element is within viewport
            if ((elementTop + elementHeight > scrollTop) && (elementTop < scrollTop + windowHeight)) {
                $(this).addClass('slide-up');
            }
        });
    });
});