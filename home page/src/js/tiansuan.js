$(function(){
    $('.ul1 li').on('click',function(){
        var i=$(this).index();
        $(this).addClass('li_best').siblings().removeClass('li_best');
        $('.bbb').eq(i).addClass('ccc').siblings().removeClass('ccc');
    })

    $('.ul6 li').on('click',function(){
        var i=$(this).index();
        $(this).addClass('tt').siblings().removeClass('tt');
        $('.eee').eq(i).addClass('ddd').siblings().removeClass('ddd');
    })
})
