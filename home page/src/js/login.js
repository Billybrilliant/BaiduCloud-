var code = ""; //在全局 定义验证码
var checkCode = document.getElementById("checkCode");


// 创建验证码
var createCode= function() {
    code = "";
    var codeLength = 4; //验证码的长度
    checkCode.value = "";
    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 35);
        code += selectChar[charIndex];
    }
    if (code.length != codeLength) {
        createCode();
    }
    document.getElementById("checkCode").innerHTML = code;
}

createCode(); //默认自动生成一次验证码


// 自身点击切换验证码
checkCode.addEventListener('click', function () {
    createCode();
})

// a标签点击切换验证码
var changeCode = document.getElementById('changeCode'); //a标签
changeCode.addEventListener('click', function () { 
    createCode();
});


// 输入验证码 并验证
var logintwo_test= document.getElementById('logintwo_test'); //输入框
var inputCode = document.getElementById('logintwo_test').value.toUpperCase(); //全局定义获取输入框内值
var validate = function () { 
    if (inputCode.length <= 0) {
        alert("请输入验证码！");
        return false;
    } else if (inputCode != code) {
        alert("验证码输入错误！");
        createCode();
        logintwo_test.value = "";
        return false;
    } else {
        alert("验证码通过！");
        return true;
    }
}

logintwo_test.addEventListener('blur', function () { 
    inputCode = document.getElementById('logintwo_test').value.toUpperCase(); //实时更新获取输入框内值
    validate();
    // console.log(inputCode);
})

// 右下角二维码
var rightcode = $('#rightcode');
var erweima = $('#erweima');
var loginone = $('#loginone');
rightcode.on('click', function () { 
    var getClass = rightcode.attr('class'); //attr:获取属性值
    // console.log(getClass);
    if (getClass == 'erweimacode') {
        rightcode.removeClass('erweimacode');
        rightcode.addClass('pc');
        erweima.css('display', 'block');
        loginone.css('display', 'none');
    } else { 
        rightcode.removeClass('pc');
        rightcode.addClass('erweimacode');
        loginone.css('display', 'block');
        erweima.css('display','none');
    }
});

// 登录选项卡
var left_login = $('#left_login');
var right_login = $('#right_login');
var logintwo = $('#logintwo');
var tipone = $('#tipone');
var rightcode = $('#rightcode');
left_login.on('click', function () { 
    logintwo.css('display','none');
    loginone.css('display', 'block');
    tipone.css('display','block');
    rightcode.css('display', 'block');
    left_login.css('border-bottom','2px solid #108cee');
    right_login.css('border-bottom', 'none');
    erweima.css('display','none');
});
right_login.on('click', function () { 
    loginone.css('display', 'none');
    tipone.css('display','none');
    logintwo.css('display','block');
    rightcode.css('display', 'none');
    left_login.css('border-bottom','none');
    right_login.css('border-bottom', '2px solid #108cee');
    erweima.css('display','none');
});


