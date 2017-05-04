<?php
$konek = mysqli_connect('localhost','root','','coba');
if($konek){
    $query = "select * from users";
    $result = mysqli_query($konek, $query);
    while($row = mysqli_fetch_assoc($result)){
        $output[] = $row;
    }
    echo json_encode($output);
}
else{
    echo "gagal";
}
?>