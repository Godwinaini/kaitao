carouselW = $(".lunbo").width()
var carouselH
if ($(".lunbo-w850").length != 0) {
    carouselH = carouselW * 305 / 850
} else if ($(".lunbo-w335").length != 0) {
    carouselH = carouselW * 255 / 335
} else {
    carouselH = carouselW * 305 / 575
}
$(".carousel").css("width", carouselW)
$(".carousel").css("height", carouselH)
$(".lunbo").css("height", carouselH)
$(".wrap-left-top").css("height", carouselH)
$(".wrap-top").css("height", carouselH)
$(window).resize(function () { //窗口改变时 重置各个部分的宽度 高度值
    carouselW = $(".lunbo").width()

    if ($(".lunbo-w850").length != 0) {
        carouselH = carouselW * 305 / 850
    } else if ($(".lunbo-w335").length != 0) {
        carouselH = carouselW * 255 / 335
    } else {
        carouselH = carouselW * 305 / 575
    }
    $(".carousel").css("width", carouselW)
    $(".carousel").css("height", carouselH)
    $(".lunbo").css("height", carouselH)
    $(".wrap-left-top").css("height", carouselH)
    $(".wrap-top").css("height", carouselH)
    $(".lunbo-item").css({
        "marginLeft": index00 * (-carouselW)
    })
})

PicTime()
var index00 = 1;
var len = $(".carousel").length //轮播个数
document.onvisibilitychange = function () {
    if (document.visibilityState == "visible") {
        PicTime()
    } else {
        clearInterval(timer);
    }
}

function PicTime() {
    timer = setTimeout(function () {
        // console.log(index00)
        if (index00 > len - 2) {
            $(".lunbo-item").stop(true, true).animate({
                "marginLeft": index00 * (-carouselW)
            }, function () {
                $(".lunbo-item").stop(true, true).animate({
                    "marginLeft": 0
                }, 0)
            })
            $(".dot li").eq(0).addClass("dots").siblings().removeClass("dots")
            index00 = 1
        } else {
            $(".lunbo-item").stop(true, true).animate({
                "marginLeft": index00 * (-carouselW)
            })
            $(".dot li").eq(index00).addClass("dots").siblings().removeClass("dots")
            index00++;
        }
        PicTime()
    },5000)
}

// 点击当前索引跳转
$(".dot li").click(function () {
    index00 = $(this).index()
    if (index00 > len - 2) {
        $(".lunbo-item").stop(true, true).animate({
            "marginLeft": index00 * (-carouselW)
        }, function () {
            $(".lunbo-item").stop(true, true).animate({
                "marginLeft": 0
            }, 0)
        })
        $(".dot li").eq(0).addClass("dots").siblings().removeClass("dots")
        index00 = 1

    } else {

        $(".lunbo-item").stop(true, true).animate({
            "marginLeft": index00 * (-carouselW)
        })
        $(".dot li").eq(index00).addClass("dots").siblings().removeClass("dots")
        index00++;
    }
})
//触碰轮播停止
$(".lunbo").hover(function () {
    clearTimeout(timer)
}, function () {
    PicTime()
})
