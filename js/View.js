$(document).ready(function(){

    // 기본 설정: 첫 번째 이미지와 텍스트만 보이게 설정
    $(".descriptiontext").hide();
    $("#text1").show();
    
    // 이미지 클릭 이벤트 설정
    $("#Choice img").click(function() {
        var index = $(this).index() + 1; // 클릭한 이미지의 인덱스를 가져옴 (0부터 시작하므로 +1)

        $(".descriptiontext").hide(); // 모든 텍스트 숨김
        $("#text" + index).show(); // 클릭한 이미지에 해당하는 텍스트만 보이게 함

        // 클릭한 이미지의 src 값을 가져와서 #Screen 내의 img 태그의 src 값으로 설정
        var imgSrc = $(this).attr('src');
        $("#Screen img").attr('src', imgSrc);
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        $('p, #Logo,h3').not('.ObjectTap *, header *, footer *, .descriptiontext').each(function () { // '.ObjectTap' 클래스를 가진 요소 안에 있는 요소를 제외합니다
            var elementTop = $(this).offset().top - 100;
            var elementHeight = $(this).height();
    
            // Check if this element is within viewport
            if ((elementTop + elementHeight > scrollTop) && (elementTop < scrollTop + windowHeight)) {
                $(this).addClass('slide-up');
            }
        });
    });

});
