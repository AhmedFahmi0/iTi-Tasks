<?php
if(isset($_POST['city'])){
$cityid = $_POST['city'];
$api = _API_URL .$cityid. _API_key;

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $api);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$data = curl_exec($ch);
curl_close($ch);

$returnedDataArr = json_decode($data, true);

showResult($returnedDataArr);

}

?>