<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2018/11/22
 * Time: 17:24
 */
header("content-type:text/html;charset=utf-8");
$sql=mysqli_connect("localhost","root","root","shop","3306");
if(mysqli_connect_errno()){
    echo "连接数据库失败，联系网络管理员处理";
}else{
    $r=mysqli_query($sql,"SELECT * FROM `account` WHERE email='{$_POST['username']}'");
    if($r->num_rows>0){
        $arr=mysqli_fetch_array($r);
        if($arr["password"]===$_POST["pw"]){
            echo "<script>alert('登录成功！');location.href='{$_GET['inde']}';</script>";
//            $r=mysqli_query($sql,"SELECT * FROM `account` WHERE 1");
//            echo "<table>";
//            echo "<tr><th>id</th><th>用户名</th><th>密码</th><th>年龄</th></tr>";
//            for($i=0;$i<$r->num_rows;$i++){
//                echo "<tr>";
//                $arrs=mysqli_fetch_array($r);
////                print_r(count($arrs));
//                for($j=0;$j<count($arrs)/2;$j++){
//
//                    echo "<td>".$arrs[$j]."</td>";
//                }
////                echo "<td><button class='btn'>删除</button></td>";
//                echo "</tr>";
//            }
//            echo "</table>";
        }else{
            echo "<script>alert('密码错误!');history.back()</script>";
        }
    }else{
        echo "<script>alert('用户名不存在!');history.back()</script>";
    }
}
/*echo "<script>
        var btn=document.getElementsByClassName('btn');
        for(var i=0;i<btn.length;i++){
            btn[i].num=i;
            btn[i].addEventListener('click',clickHandler);
        }
        function clickHandler(e) {
            var id=document.getElementsByTagName('tr')[this.num+1].firstElementChild.textContent;

        }

</script>";*/