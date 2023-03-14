<?php
require_once("vendor/autoload.php");

if(!empty($_FILES)){
    $upload=new Upload();
    $upload->uploadToS3(_bucketName,_key,_secret,_region,_version);
}
require_once("views/upload.php");