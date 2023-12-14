$(document).ready(function(){
    var imgCount = $('#Slider img').length;
    var currentIndex = 0;

    $('#RightButton').click(function(){
        currentIndex = (currentIndex + 1) % imgCount;
        $('#Slider').css('transform', 'translateX(' + (-currentIndex * 1080) + 'px)');
        if(currentIndex == imgCount - 1) {
            $('#RightButton').hide();
        } else {
            $('#LeftButton').show();
        }
    });

    $('#LeftButton').click(function(){
        if(currentIndex == 0) {
            currentIndex = imgCount - 1;
        } else {
            currentIndex--;
        }
        $('#Slider').css('transform', 'translateX(' + (-currentIndex * 1080) + 'px)');
        if(currentIndex == 0) {
            $('#LeftButton').hide();
        } else {
            $('#RightButton').show();
        }
    });



    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
    
        $('p, #Logo,h3').not('.ObjectTap *,footer *').each(function () { // '.ObjectTap' 클래스를 가진 요소 안에 있는 요소를 제외합니다
            var elementTop = $(this).offset().top - 100;
            var elementHeight = $(this).height();
    
            // Check if this element is within viewport
            if ((elementTop + elementHeight > scrollTop) && (elementTop < scrollTop + windowHeight)) {
                $(this).addClass('slide-up');
            }
        });
    });

});