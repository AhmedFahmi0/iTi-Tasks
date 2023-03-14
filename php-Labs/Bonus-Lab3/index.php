<?php
require_once("vendor/autoload.php");
use Aws\S3\S3Client;

if(!empty($_FILES)){
    $bucketName="iti-os43";
    $key='AKIAZXOPJAYZJIQ73KRG';
    $secret='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';
    $region='eu-west-2';
    $version='latest';
    $upload=new Upload();
    $upload->uploadToS3($bucketName,$key,$secret,$region,$version);
}
require_once("views/upload.php");