<?php

require './heasers.php';
require './conn.php';

function cnews($obj){
    $sql = "select id,c_title,c_title_img,c_title_content from cnews";
    $stmt = mysqli_query($obj,$sql);
    $hot = [];
    $i = 0;
    while ($row = mysqli_fetch_assoc($stmt)) {
        $hot[$i]['id'] = $row['id'];
        $hot[$i]['title'] = $row['c_title'];
        $hot[$i]['titleImg'] = $row['c_title_img'];
        $hot[$i]['titleContent'] = $row['c_title_content'];
        $i++;
    }
    return json_encode($hot, JSON_UNESCAPED_UNICODE);
}

function details($obj,$id){
    $sql = "select c_title,c_content,c_time from cnews where id='".intval($id)."'";
    $stmt = mysqli_query($obj,$sql);
    $hot = [];
    $i = 0;
    while ($row = mysqli_fetch_assoc($stmt)) {
        $hot[$i]['title'] = $row['c_title'];
        $hot[$i]['c_content'] = $row['c_content'];
        $hot[$i]['c_time'] = $row['c_time'];
        $i++;
    }
    return json_encode($hot, JSON_UNESCAPED_UNICODE);
}

if (isset($_GET['id'])) {
    echo details($obj,$_GET['id']);
}else {
    echo cnews($obj);
}
?>