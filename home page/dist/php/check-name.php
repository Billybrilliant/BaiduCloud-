<?php

// 1.连接数据库
    $conn = mysqli_connect("localhost", "root", "", "baidu");
    if (!$conn){
        echo "Error: Unable to connect to MySQL." . PHP_EOL;
        echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
        echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
        exit;
    }
// 设置编码，防止中文乱码
    mysqli_set_charset($conn, "utf8");
// 2.接收前端传过来的uname
    $uname=$_REQUEST["uname"];
  
// 3.拼接sql，并查询uname是否存在
    $sql=" SELECT uname FROM register WHERE uname='$uname'";
    $result=mysqli_query($conn,$sql);
// 4.根据查询的结果输出相应
$row=mysqli_fetch_row($result);
  //抓取一条数据，即当前uname对应的数据

    $raw_success ='true';
	$raw_fail ='false';

    $res_success = json_encode($raw_success);  //json_encode转为json对象格式  json_decode:将json对象格式转为php变量
    $res_fail = json_encode($raw_fail);

  if($row==null){
  //如果$row为空，即数据库中没有相同的用户名存在 
  echo $res_success;
  }else{
    echo $res_fail;
  };
?>
