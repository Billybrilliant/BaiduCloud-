$(function () {
    $('.ul1 li').on('click', function () {
        var i = $(this).index();

 
        $(this).addClass('li_best').siblings().removeClass('li_best');
        $('.bbb').eq(i).addClass('ccc').siblings().removeClass('ccc');
    })

    $('.ul6 li').on('click', function () {
        var i = $(this).index();
        $(this).addClass('tt').siblings().removeClass('tt');
        $('.eee').eq(i).addClass('ddd').siblings().removeClass('ddd');
    })
    // 背景滑动
    var middle = $('.middle'); 
    var midTop = middle.offset().top; 
    var receive = $('.receive'); 
    var receivetop = receive.offset().top; 

    $(document).on('scroll', function () { 
        var scrollTop = $(document).scrollTop();

        if (scrollTop > midTop) {
            middle.css('backgroundPositionY','50%');
        }
        if(scrollTop < midTop) { 
            middle.css('backgroundPositionY','0');
        }
        if (scrollTop > receivetop) {
            receive.css('backgroundPositionY','50%');
        }
        if(scrollTop < receivetop){ 
            receive.css('backgroundPositionY','0');
        };

    })
  
    // 事件委托
    // var liList = $('.ul1>li'); //LI列表
    // liList.on('mouseover', function (event) {
    //     var target = event.target; //获取目标 
    //     //   console.log(target);
    //     var targetH = this.clientHeight; //获取目标元素高度
    //     // var thisName = this.className; //获取目标元素类名
    //     if (targetH == 70) {
    //         console.log(targetH);
    //         $(this).css({"background":"linear-gradient(to right, #01c2e6 0%, #1160ff 100%)"});
    //     } else { 
    //         $(this).css({"background":"#108cee"});
    //     }
    // });
    // liList.on('mouseout', function (event) {
    //     var target = event.target; //获取目标 
    //     //   console.log(target);
    //     var targetH = this.clientHeight; //获取目标元素高度
    //     // var thisName = this.className; //获取目标元素类名
    //     if (targetH == 70) {
    //         $(this).css({"background":"#212121"});
    //     } else { 
    //         $(this).css({"background":"#108cee"});
    //     }
    // });

    // !function (event) { 
    //     if (targetH == 70) {
    //         console.log(targetH);
    //         $(this).css({"background":"yellow"});
    //     } else { 
    //         $(this).css({"background":"#108cee"});
    //     }
    // }()

})