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