~(function () {
    $('.search_btn').on('click', function () {
        $('.search_box').addClass('active')
        $('.input').addClass('input_active')
    })
    $('.nav_top').on('click', function (event) {
        if (!$(event.target).attr('title')) {
            $('.search_box').removeClass('active')
            $('.input').removeClass('input_active')
        }

    })
    $('.m-all>ul>li').hover(function () {
        $(this).addClass('hover').siblings().removeClass('hover')
        $(this).children('span').addClass('show')
        $(this).children('a').addClass('change')
        $(this).siblings().children('span').removeClass('show')
        $(this).siblings().children('a').removeClass('change')
        $('.m-dec>ul').eq($(this).index()).addClass('show').siblings().removeClass('show')
    })
    $('.product-list>li').hover(function () {
        $(this).addClass('hover change').siblings().removeClass('hover change')
        $(this).children('span').addClass('show')
        $(this).children('i').addClass('change2')
        $(this).children('.menu').addClass('show')
        $(this).siblings().children('span').removeClass('show')
        $(this).siblings().children('.menu').removeClass('show')

    }, function () {
        $(this).children('i').removeClass('change2')
    })
    var storage = localStorage.getItem('uname')
    storage = JSON.parse(storage);

    if (storage) {
        $('#uname').html(storage);
        $('#login').empty()
        $('.sign_in').empty()
        if (screen.availWidth < 768) {
            // $('#uname').removeAttr('data');
            // if ($('#uname').attr('data')) {

            //     // $('.xs-login').hide();
            // } else {
            //     $('#uname').attr('data', '1');

            // }

            $('.xs-login').hide();

            // $('.xs-login').html('<span style="color:#fff;">' + storage + '</span>')

        } else {
            
            // if ($('#uname').attr('data')) {
            //     $('.xs-login').hide();

            // }
            // $('.xs-login').hide();
        }

    }
    $('#exit').click(function () {
        $('#login').html('登录')
        $('.sign_in').html('注册')
        $('#uname').empty()
        localStorage.removeItem('uname')
    })

    var srceen = window.screen.width;


})