<?php

require './heasers.php';
require './conn.php';

function stores($obj){
    $sql = "select s.s_id,s.brand,s.country,s.city,c.center_lon,c.center_lat,c.store_num,s.store_number,s.store_name,s.street_address,s.longitude,s.latitude,s.phone_number,s.postcode,s.ownership_type from stores s inner join city c on s.city=c.city";
    $stmt = mysqli_query($obj,$sql);
    $hot = [];
    $i = 0;
    while ($row = mysqli_fetch_assoc($stmt)) {
        $hot[$i]['id'] = $row['s_id'];
        $hot[$i]['Brand'] = $row['brand'];
        $hot[$i]['Country'] = $row['country'];
        $hot[$i]['City'] = $row['city'];
        $hot[$i]['CenterLon'] = $row['center_lon'];
        $hot[$i]['CenterLat'] = $row['center_lat'];
        $hot[$i]['StoreNum'] = $row['store_num'];
        $hot[$i]['StoreNumber'] = $row['store_number'];
        $hot[$i]['StoreName'] = $row['store_name'];
        $hot[$i]['StreetAddress'] = $row['street_address'];
        $hot[$i]['Longitude'] = $row['longitude'];
        $hot[$i]['Latitude'] = $row['latitude'];
        $hot[$i]['PhoneNumber'] = $row['phone_number'];
        $hot[$i]['Postcode'] = $row['postcode'];
        $hot[$i]['OwnershipType'] = $row['ownership_type'];
        $i++;
    }
    return json_encode($hot, JSON_UNESCAPED_UNICODE);
}

echo stores($obj);
?>