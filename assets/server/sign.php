<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2018/11/22
 * Time: 15:02
 */
//$_POST
header("content-type:text/html;charset=utf-8");
$sql=mysqli_connect("localhost","root","root","shop","3306");
if(mysqli_connect_errno()){
    echo "连接数据库失败，联系网络管理员处理";
}else{
    $r=mysqli_query($sql,"INSERT INTO `account`(`id`, `email`, `username`, `password`) VALUES (null,'{$_POST["email"]}','{$_POST["username"]}','{$_POST["password1"]}')");
//`userbase` 标点是上键盘1前的那个点！！！
    if($r){
        echo "<script>alert('注册成功！');location.href='{$_GET['login']}';</script>";
    }else{
        echo "<script>alert('注册的用户名存在，请重新填写');history.back()</script>";
    }
}

