$(document).ready(function() {
    var imgNum = 0;
    var totalNum = $(".Thumbnail .Frame .ImageContainer img").length;
    
    // 첫 번째와 마지막 이미지를 복제하여 각각 반대쪽 끝에 추가
    $(".Thumbnail .Frame .ImageContainer").append($(".Thumbnail .Frame .ImageContainer img:first-child").clone().removeAttr('id'));
    $(".Thumbnail .Frame .ImageContainer").prepend($(".Thumbnail .Frame .ImageContainer img:nth-child(" + totalNum + ")").clone().removeAttr('id'));
    
    // 복제된 이미지까지 포함하여 이미지 개수 업데이트
    totalNum += 2;
    
    // 초기 이미지 위치 설정 (복제된 첫 번째 이미지를 건너뛰고 진짜 첫 번째 이미지를 보이게 함)
    $(".Thumbnail .Frame .ImageContainer").css("left", "0px");
    
    function imgMove() {
        $(".Thumbnail .Frame .ImageContainer").stop().animate(
            {"left": (-imgNum * 920) + "px"}, 
            500, 
            function() { // 콜백 함수 추가
                $(".TextBox ul li").hide();
                
                // 현재 보이는 이미지의 ID를 가져옵니다.
                var currentId = $(".Thumbnail .Frame .ImageContainer a").eq(imgNum).attr('id');
                
                // 만약 currentId가 undefined라면, 즉 현재 보이는 이미지가 복제된 이미지라면 이전 또는 다음 이미지의 ID를 가져옵니다.
                if (currentId === undefined) {
                    if (imgNum === 0) {
                        currentId = $(".Thumbnail .Frame .ImageContainer a").eq(5).attr('id');
                    } else {
                        currentId = $(".Thumbnail .Frame .ImageContainer a").eq(imgNum-5).attr('id');
                    }
                }
                
                $(".TextBox ul li#" + currentId).fadeIn();
            }
        );
    }
    $("#LeftButton").click(function() {
        imgNum--;
        if (imgNum < 0) {
            imgNum = totalNum - 3;
            $(".Thumbnail .Frame .ImageContainer").css("left", -(totalNum - 2) * 920 + "px");
        }
        imgMove();
    });
    
    $("#RightButton").click(function(){
        imgNum++;
        if (imgNum == totalNum - 1){
            imgNum = 1;
            $(".Thumbnail .Frame .ImageContainer").css("left", "0px");
        }
        imgMove();
    });

    // 페이지 로드 시 첫 번째 텍스트를 보이게 합니다.
    $(".TextBox ul li#One").fadeIn();

    // 페이지 로드 시 나머지 텍스트들을 숨깁니다.
    $(".TextBox ul li:not(#One)").hide();
    });