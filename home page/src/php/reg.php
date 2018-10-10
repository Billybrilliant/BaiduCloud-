<?php
// 1.获取请求提交的数据
    $uname=$_REQUEST["uname"];
    //uname值就是前端页面中name属性的值
    $upwd=$_REQUEST["upwd"];
    //确认密码不用获取，获取一个密码就行

// 2.连接到数据库
$conn = mysqli_connect("localhost", "root", "", "baidu");
if (!$conn){
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
// 设置编码，防止中文乱码
mysqli_set_charset($conn, "utf8");

// 3.写sql语句并执行
$sql="INSERT INTO register (uname, upwd) VALUES ('$uname','$upwd')";
//字段值 外面用双引号，里面用单引号
$result=mysqli_query($conn,$sql);
//执行sql语句

// 4.根据执行结果给出响应
    if($result==true){ //函数返回值
        echo "<span  style="font-size:40px;color:red;">注册成功</span>";
        echo '<a href="../html/login.html" style="font-size:40px;color:red;">立即登录</a>';
    }else{
        echo "<span  style="font-size:40px;color:red;">注册失败</span>";
        echo '<a href="../html/reg.html" style="font-size:40px;color:red;">重新注册</a>';
    };
?>