<?php

require './heasers.php';
require './conn.php';

function product($obj,$id){
    $sql = "select product,body,preview,popular from product where p_id='".intval($id)."'";
    $stmt = mysqli_query($obj,$sql);
    $hot = [];
    $i = 0;
    while ($row = mysqli_fetch_assoc($stmt)) {
        $hot[$i]['title'] = $row['product'];
        $hot[$i]['body'] = $row['body'];
        $hot[$i]['preview'] = "https://www.starbucks.com.cn".$row['preview'];
        $hot[$i]['popular'] = $row['popular'];
        $i++;
    }
    if($hot){
        return json_encode($hot, JSON_UNESCAPED_UNICODE);
    }else{
        return '{"code": "200","msg": "参数有误"}';
    }
}

function selall($obj,$all){
    $sql = "select * from product";
    $stmt = mysqli_query($obj,$sql);
    $hot = [];
    $i = 0;
    while ($row = mysqli_fetch_assoc($stmt)) {
        $hot[$i]['id'] = $row['p_id'];
        $hot[$i]['title'] = $row['product'];
        $hot[$i]['smallImg'] = $row['product_img'];
        $hot[$i]['subTypeID'] = $row['s_id'];
        $hot[$i]['preview'] = "https://www.starbucks.com.cn".$row['preview'];
        $hot[$i]['body'] = $row['body'];
        $hot[$i]['popular'] = $row['popular'];
        $i++;
    }
    if($hot){
        return json_encode($hot, JSON_UNESCAPED_UNICODE);
    }else{
        return '{"code": "200","msg": "参数有误"}';
    }
}

if (isset($_GET['id'])) {
    echo product($obj,$_GET['id']);
}else if(isset($_GET['all']) && $_GET['all'] == "all"){
    echo selall($obj,$_GET['all']);
} else {
    echo '{"code": "200","msg": "参数有误"}';
}
?>