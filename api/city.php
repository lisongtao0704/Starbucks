<?php

require './heasers.php';
require './conn.php';

function city($obj){
    $sql = "select * from city";
    $stmt = mysqli_query($obj,$sql);
    $hot = [];
    $i = 0;
    while ($row = mysqli_fetch_assoc($stmt)) {
        $hot[$i]['id'] = $row['id'];
        $hot[$i]['City'] = $row['city'];
        $hot[$i]['CenterLon'] = $row['center_lon'];
        $hot[$i]['CenterLat'] = $row['center_lat'];
        $hot[$i]['StoreNum'] = $row['store_num'];
        $i++;
    }
    return json_encode($hot, JSON_UNESCAPED_UNICODE);
}

echo city($obj);
?>