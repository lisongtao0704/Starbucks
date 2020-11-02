<?php

require './heasers.php';
require './conn.php';

// function index($obj){
//     $sql = "select * from city";
//     $stmt = mysqli_query($obj,$sql);
//     $hot = [];
//     $i = 0;
//     while ($row = mysqli_fetch_assoc($stmt)) {
//         $hot[$i]['id'] = $row['id'];
//         $hot[$i]['city'] = $row['city'];
//         $hot[$i]['CenterLon'] = $row['center_lon'];
//         $hot[$i]['CenterLat'] = $row['center_lat'];
//         $hot[$i]['StoreNum'] = $row['store_num'];
//         $i++;
//     }
//     return json_encode($hot, JSON_UNESCAPED_UNICODE);
// }

function sel($obj,$category,$type){
    $sql = "";
    if ($type == "all") {
        $sql = "select p.p_id,p.product,p.product_img,s.sub_type from product p join subtype s on s.id=p.s_id and s.c_id=".$category;
    } else{
        $sql = "select p.p_id,p.product,p.product_img,s.sub_type from product p join subtype s on s.id=p.s_id and s.c_id=".$category." and s.sub_type='".$type."'";
    }
    $stmt = mysqli_query($obj,$sql);
    return $stmt;
}


$data = "";
$category_type = "";
if (isset($_GET['type']) && isset($_GET['category'])) {
    if ($_GET['category'] == "beverages") {
        $category = 1;
        $category_type = "Beverages";
    } elseif ($_GET['category'] == "coffee") {
        $category = 2;
        $category_type = "Coffee";
    } elseif ($_GET['category'] == "food") {
        $category = 3;
        $category_type = "Food";
    } elseif ($_GET['category'] == "merchandise") {
        $category = 4;
        $category_type = "Merchandise";
    } elseif ($_GET['category'] == "selection") {
        $category = 5;
        $category_type = "Selection";
    } else {
        $data = '{"code": "200","msg": "参数有误"}';
    }
    @$result = sel($obj,$category,$_GET['type']);
    if ($result) {
        $hot = [];
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $hot[$i]['ProductID'] = $row['p_id'];
            $hot[$i]['ProductName'] = $row['product'];
            $hot[$i]['ProductImage'] = "http://123.56.129.223/starbucks/static/images/products/" . $row['product_img'];
            $hot[$i]['Category'] = $category_type;
            $hot[$i]['SubTypes'] = $row['sub_type'];
            $i++;
        }
        $data = json_encode($hot, JSON_UNESCAPED_UNICODE);
    }
} else{
    $data = '{"code": "200","msg": "参数缺失"}';
}

echo $data;
?>