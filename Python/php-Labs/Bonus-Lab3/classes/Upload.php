<?php
use Aws\S3\S3Client;
class Upload{
        public function __construct(){
    
}
public function uploadToS3($bucketName,$key,$secret,$region,$version){
    if(!empty($_FILES)){
        if($_FILES["fileToUpload"]["size"] > 3000000){
            die("file is too big");
        }elseif(!stristr($_FILES["fileToUpload"]["type"],"image")){
            die("file type is not supported");
        }else{
           
           // move_uploaded_file($_FILES["fileToUpload"]["tmp_name"],"uploads/$id");
            $s3=S3Client::factory(array(
                'credentials' => array(
                    'key' => $key,
                    'secret' => $secret
                ),'region' => $region,
                'version' => $version
            ));
            try{
                $id=uniqid();
                $s3->upload($bucketName,$id,fopen($_FILES["fileToUpload"]["tmp_name"],"r+"));
                echo "uploaded successfully";
            } catch (Aws\S3\Exception\S3Exception $e) {
                echo "There was an error uploading the file";
            }
            //die("uploaded successfully");
        }
        }
    }
}