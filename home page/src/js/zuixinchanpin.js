window.onload=function(){
    var changing_one=document.querySelectorAll('.changing_one');
    var i=0;
    setInterval(function(){
        
        $('.changing_one').eq(i).css('z-index','10').siblings().css('z-index','1');
        i++;
        if(i==5)i=0;
        $('.changing_one').eq(i-1).children('img').animate({
            top:34,
            opacity:1,
        },1000)
        $('.changing_one').eq(i-1).siblings().children('img').css({
            top:76,
            opacity:0
        });
    },3000)
    
}
$(function(){
    $('.tab_top .ul2 li').on('click', function() {
        var i = $(this).index()
        $(this).addClass('tim').siblings().removeClass('tim');
        // $('li').eq(i).show().siblings().hide();//css中的.ccc{的！important需要移除}
        $('.max_contain').eq(i).addClass('xxx').siblings().removeClass('xxx'); //css中的.ccc{的！important需要在}

    })
})