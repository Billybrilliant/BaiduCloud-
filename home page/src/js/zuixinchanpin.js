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
    

//   $('#id').animate({
//     top:34,
//     opacity:1,
// },1000)
//     setInterval(function(){
// $('.changing_one').eq(i).children('img').animate({
//             top:34,
//             opacity:1,
//         },1000)
//         $('.changing_one').eq(i-1).siblings().children('img').css({
//             top:76,
//             opacity:0
//         });
//     },3000)
}