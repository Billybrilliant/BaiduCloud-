$(function() {
    $('.search_btn').on('click', function() {
        $('.search_box').addClass('active')
        $('.input').addClass('input_active')
    })
    $('.nav_top').on('click', function(event) {
        if (!$(event.target).attr('title')) {
            $('.search_box').removeClass('active')
            $('.input').removeClass('input_active')
        }

    })
    $('.m-all>ul>li').hover(function() {
        $(this).addClass('hover').siblings().removeClass('hover')
        $(this).children('span').addClass('show')
        $(this).children('a').addClass('change')
        $(this).siblings().children('span').removeClass('show')
        $(this).siblings().children('a').removeClass('change')
        $('.m-dec>ul').eq($(this).index()).addClass('show').siblings().removeClass('show')
    })
    $('.product-list>li').hover(function() {
        $(this).addClass('hover change').siblings().removeClass('hover change')
        $(this).children('span').addClass('show')
        $(this).children('i').addClass('change2')
        $(this).children('.menu').addClass('show')
        $(this).siblings().children('span').removeClass('show')
        $(this).siblings().children('.menu').removeClass('show')

    }, function() {
        $(this).children('i').removeClass('change2')
    })
})