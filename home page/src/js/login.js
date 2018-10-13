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
    erweima.css('display', 'none');
    rightcode.removeClass('pc');
    rightcode.addClass('erweimacode');
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


// 登录实现
// 检测数据库用户名
var username = $('#uname'); //用户名输入框
var loginerror = $('#loginerror'); //登录错误提示
username.on('blur', function () { 
    //1.创建XHR对象 创建异步对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); //标准创建
    } else {
        //IE6及以下的创建方式
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }

    //2.创建请求
    var uname = username.val();
    //获取输入框里的值，把用户名传到后端，再查询
    var url = "../php/check-name.php?uname=" + uname;
    xhr.open("get", url, true);
    //查询用户名称，用get方法就行，去数据库查询，看用户名是否已经存在
    //查询用get就行，向服务器提交数据时再用post

    //3.设置回调函数，监听状态
    //参数true，异步

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //判断状态，xhr请求状态为4，表示接收响应数据成功；当status的值是200的时候，表示服务器已经正确的处理请求以及给出响应
            var resultStr = xhr.responseText;
          var resultJson  =JSON.parse(resultStr);
            if (resultJson=='true') {
                loginerror.text("用户名不存在");   
                username.css("outline", "none"); //去除聚焦时的边框
                username.css("border-color", "red"); //设置错误时边框
            } else {
                // form.removeAttr("action");
                loginerror.text("用户名可登录");
                username.css("outline", "none"); //去除聚焦时的边框
                username.css("border-color", "#bdc7d3");
            }

            //提示内容
        };
    };

    //4.发送请求
    xhr.send(null);
    //get请求，参数写null
});


//判断是否可登录 
var loginone = $('#loginone');
var submit = $('#submit');
submit.on('mouseover', function () { 
    // 满足所有规则时向后台提交数据
    var err = loginerror.text();
    if (err=='用户名可登录') {
        loginone.attr("action", "../php/login.php");
        
    } else { 
        loginone.removeAttr("action");
    }

});



