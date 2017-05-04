<?php
$konek = mysqli_connect('localhost', 'root', '', 'coba');
if ($konek){
    echo "koneksi berhasil";
}
else{
    echo "koneksi gagal";
}
$data = json_decode(file_get_contents("php://input"));
$nama = $data->nama;
$kota = $data->kota;
$query = "INSERT into users values (DEFAULT, '$nama', '$kota')";
if(mysqli_query($konek, $query)){
    echo "data berhasil disimpan";
}
else{
    echo "data gagal disimpan";
}
?>