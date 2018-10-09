// 用户名正则验证
var userName = $('#_san_13');
var form = $('#_san_7');
var submit = $('#_san_45');
var userReg = /^[A-Za-z\d_-]{6,32}$/; //用户名正则
var userError = $('#_san_81'); //用户名错误文本
userName.on("keyup", function () {
    if (userReg.test(userName.val())) {
        userName.css("border-color", "#ccc");
        userError.text("")
    }
    if (!userReg.test(userName.val())) {
        userName.css("outline", "none"); //去除聚焦时的边框
        userName.css("border-color", "red"); //设置错误时边框
        userError.text("用户名长度必须是6-32个字符之间") //错误内容
    }
    if (userName.val() == "") {
        userName.css("outline", "none");
        userError.text("用户名必填")
        userName.css("border-color", "red");
    }
});

// 用户名数据库验证
//1.完成用户名称的重复性验证（异步，检查数据库中是否已存在当前用户名）
//异步请求数据，因为还要输入下面的数据，不能跳转到php页面去验证
userName.on("blur", function () {
    //1.创建XHR对象 创建异步对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); //标准创建
    } else {
        //IE6及以下的创建方式
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }

    //2.创建请求
    var uname = userName.val();
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
                // userError.text("用户名可用");   
            } else {
                form.removeAttr("action");
                userName.css("outline", "none"); //去除聚焦时的边框
                userName.css("border-color", "red"); //设置错误时边框
                userError.text("用户名已存在");
            }
            // console.log(resultJson=='false');
            //提示内容
        };
    };

    //4.发送请求
    xhr.send(null);
    //get请求，参数写null
});


// 密码正则验证
var pwd = $('#_san_19');
var pwdReg = /^.*(?=.{6,32})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/; //密码正则(6-32位且至少1个大写字母，1个小写字母，1个数字)
var pwdError = $('#_san_57'); //密码错误文本
pwd.on("keyup", function () {
    if (pwdReg.test(pwd.val())) { //格式正确
        pwd.css("border-color", "#ccc");
        pwdError.text("");
    }
    if (pwd.val().length <= 6) { //格式错误
        pwd.css("outline", "none"); //去除聚焦时的边框
        pwd.css("border-color", "red"); //设置错误时边框
        pwdError.text("密码长度必须是6-32个字符之间") //错误内容
    }
    if (pwd.val().length > 6 && (!pwdReg.test(pwd.val()))) {
        pwd.css("outline", "none"); //去除聚焦时的边框
        pwd.css("border-color", "red"); //设置错误时边框
        pwdError.text("密码必须包含数字、大小写英文字母") //错误内容
    }
    if (pwd.val() == "") { //密码为空
        pwd.css("outline", "none");
        pwdError.text("密码必填");
        pwd.css("border-color", "red");
    }
});
// 确认密码验证
var pwdCheck = $('#_san_25');
var pwdCheckReg = /^.*(?=.{6,32})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/; //密码正则(6-32位且至少1个大写字母，1个小写字母，1个数字)
var pwdCheckError = $('#_san_59'); //确认密码错误文本
pwdCheck.on("keyup", function () {
    if (pwdCheckReg.test(pwdCheck.val()) && pwdCheck.val() === pwd.val()) { //确认密码正确
        pwdCheck.css("border-color", "#ccc");
        pwdCheckError.text("");
    }
    if (pwdCheck.val().length <= 6) { //格式错误
        pwdCheck.css("outline", "none"); //去除聚焦时的边框
        pwdCheck.css("border-color", "red"); //设置错误时边框
        pwdCheckError.text("确认密码长度必须是6-32个字符之间") //错误内容
    }
    if (pwdCheck.val().length > 6 && (!pwdCheckReg.test(pwdCheck.val()))) {
        pwdCheck.css("outline", "none"); //去除聚焦时的边框
        pwdCheck.css("border-color", "red"); //设置错误时边框
        pwdCheckError.text("确认密码必须包含数字、大小写英文字母") //错误内容
    }
    if (pwdCheckReg.test(pwdCheck.val()) && pwdCheck.val() != pwd.val()) { //确认密码正确
        pwdCheck.css("outline", "none"); //去除聚焦时的边框
        pwdCheck.css("border-color", "red"); //设置错误时边框
        pwdCheckError.text("两次输入的内容不一致") //错误内容
    }
    if (pwdCheck.val() == "") { //密码为空
        pwdCheck.css("outline", "none");
        pwdCheckError.text("确认密码必填");
        pwdCheck.css("border-color", "red");
    }
});

//判断是否可注册
submit.on('mouseover', function () { 
    // 满足所有规则时向后台提交数据
    if (userReg.test(userName.val()) == true&&pwdReg.test(pwd.val())==true&&pwdCheckReg.test(pwdCheck.val())==true && (pwdCheck.val() === pwd.val())==true) {
        form.attr("action", "../php/reg.php");
    } else { 
        form.removeAttr("action");
    }
});

