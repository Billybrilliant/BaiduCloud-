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
    $('.all-dec .right>div').stop(true, false)
    $(this).addClass('hover2').siblings().removeClass('hover2')
    var i = $(this).index() / 2 + 4
    $(this).mouseout(function() {
        $('.all-dec .right>div').eq(i - 4).siblings().css({
            zIndex: -10,
        })
    })
    $('.all-dec')[0].style.backgroundImage = "url(../images/bg" + i + ".png)"
    $('.all-dec .right>div').eq(i - 4).siblings().animate({
        top: 50,
        opacity: 0,
    })
    $('.all-dec .right>div').eq(i - 4).siblings().css({
        zIndex: -10,
    })
    setTimeout(function() {
        $('.all-dec .right>div').eq(i - 4).animate({
            top: 0,
            opacity: 1
        }, 500)
        $('.all-dec .right>div').eq(i - 4).css({
            zIndex: 5,
        })
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
$('.yun-product>.main>.box1 li').hover(function() {
    $(this).toggleClass('bg-change');
})
$('.footer > .container > .top > .right > div > div').hover(function() {
    $('.footer > .container > .top > .right >h2').css({
        opacity: .4,
    })
    $('.footer > .container > .top > .right >p').css({
        opacity: .4,
    })
}, function() {
    $('.footer > .container > .top > .right >h2').css({
        opacity: 1,
    })
    $('.footer > .container > .top > .right >p').css({
        opacity: 1,
    })
})
var arrDis = []
var x = 0
$(document).scroll(function() {
    $('.all-dec').stop()
    $('.data-center').stop()
    var distance = $(document).scrollTop();
    do {
        arrDis.push(distance)
    } while (arrDis.length < 3)
    arrDis.shift()
    var range = arrDis[1] - arrDis[0]
    console.log(distance)
    if (distance > 800 && distance < 1400) {
        if (range > 0) {
            x -= 2;
        }
        if (range < 0) {
            x += 2;
        }
        $('.all-dec').animate({
            backgroundPositionY: x,
        })

    }
    if (distance >= 2400 && distance <= 2900) {
        console.log(1)
        if (range > 0) {
            x -= 1.5;
        }
        if (range < 0) {
            x += 1.5;
        }
        $('.data-center').animate({
            backgroundPositionY: x,
        })
    }
    if (distance >= 3200) {
        if ($('.data .box1 span').html() == '3,567,892,881') {
            $('.data .box1 span').html('3,567,892,881')
        } else {
            var n = 1;
            var c = setInterval(function() {
                $('.data .box1 span').html(n)
                n += 15672746;
                if (n >= 3567892881) {
                    clearInterval(c)
                    $('.data .box1 span').html('3,567,892,881')
                }

            })
        }
        if ($('.data .box2 span').html() == '99.999999999 %') {
            $('.data .box2 span').html('99.999999999 %')
        } else {
            var m = 0;
            var safetime = setInterval(function() {
                $('.data .box2 span').html(m + '.000000000%')
                m += 1;
                if (m >= 99) {
                    clearInterval(safetime)
                    $('.data .box2 span').html('99.999999999 %')
                }

            }, 10)
        }
        if ($('.data .box3 span').html() == '100倍') {
            $('.data .box3 span').html('100倍')
        } else {
            var z = 0;
            var datatime = setInterval(function() {
                $('.data .box3 span').html(z + '倍')
                z += 1;
                if (z >= 100) {
                    clearInterval(datatime)
                    $('.data .box3 span').html('100倍')
                }
            }, 10)
        }
        if ($('.data .box4 span').html() == '7x24') {
            $('.data .box4 span').html('7x24')
        } else {
            var y = 0;
            var h = 0;
            var servertime = setInterval(function() {
                $('.data .box4 span').html(y + 'x' + h)
                y += 1;
                h += 3;
                if (y > 7) {
                    clearInterval(servertime)
                    $('.data .box4 span').html('7x24')
                }
            }, 150)
        }





    }
})