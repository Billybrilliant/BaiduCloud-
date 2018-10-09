$('.yun-server>.left>div').hover(function() {
    $(this).children('img').addClass('show');
    $(this).children('.cricle').addClass('show');
    $(this).children('span').html($(this).children('p').html());
}, function() {
    $(this).children('img').removeClass('show');
    $(this).children('span').html('');
    $(this).children('.cricle').removeClass('show');
})
$('.yun-server>.left>div').not($('.yun')).on('click', function() {
    var url = $(this).children('img')[0].src
    var p = $(this).children('p').html()
    var h2 = $(this).children('h2').html()
    var h4 = $(this).children('h4').html()
        // $(this).children('img').animate({
        //     top: $('.yun>img').offset().top,
        //     left: $('.yun>img').offset().left,
        // })
    var _index = $(this).children('p').html()
    if (_index == '天智') {
        _index = 1;
    }
    if (_index == '天算') {
        _index = 2;
    }
    if (_index == '天工') {
        _index = 3;
    }
    if (_index == '天像') {
        _index = 4;
    }
    if (_index == '基础云') {
        _index = 0;
    }
    $('.yun-server>.right>div').eq(_index).siblings().animate({
        top: 80,
        opacity: 0,
    }, 500)
    $('.yun-server>.right>div').eq(_index).siblings().css({
        zIndex: -1,
    })
    setTimeout(function() {
        $('.yun-server>.right>div').eq(_index).css({
            zIndex: 5,
        })
        $('.yun-server>.right>div').eq(_index).animate({
            top: 50,
            opacity: 1,
        }, 500)
    }, 600)
    console.log($('.yun>img').offset());
    $(this).children('img')[0].src = $('.yun>img')[0].src;
    $('.yun>img')[0].src = url;
    $(this).children('p').html($('.yun>p').html());
    $('.yun>p').html(p)
    $(this).children('h2').html($('.yun>h2').html())
    $('.yun>h2').html(h2)
    $(this).children('h4').html($('.yun>h4').html())
    $('.yun>h4').html(h4)
    console.log(_index)

})
$('.all-dec li').mouseenter(function() {
    $(this).addClass('hover2').siblings().removeClass('hover2')
    var i = $(this).index() / 2 + 4
    $('.all-dec')[0].style.backgroundImage = "url(../images/bg" + i + ".png)"
    $('.all-dec .right>div').stop(true, false)
    $('.all-dec .right>div').eq(i - 4).siblings().animate({
        top: 50,
        opacity: 0,
    })
    setTimeout(function() {
        $('.all-dec .right>div').eq(i - 4).animate({
            top: 0,
            opacity: 1
        }, 500)
    }, 100)
})
$('.yun-product>.main>.box1').mouseenter(function() {
    $(this).stop(true, true)
    $(this).siblings().children('.ul2').hide().siblings().show()
    $(this).siblings().children('.ul1').animate({
        opacity: 1,
        marginTop: 0,
    })
    $(this).siblings().children('.ul2').css({
        opacity: 0,
        marginTop: 0,
    })
    $(this).children('.ul1').hide().siblings().show()
    $(this).children('.ul2').animate({
        opacity: 1,
        marginTop: -90,
    })
    $(this).children('.ul1').css({
        opacity: 0,
        marginTop: -90,
    })
})