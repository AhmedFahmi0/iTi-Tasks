<?php

function validate_form(){
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $message = $_POST["message"];
    if ((empty($_POST["name"])) && (!empty($_POST["email"])) && (!empty($_POST["message"]))) {
        echo "*Name is required";
    } else if ((!empty($_POST["name"])) && (empty($_POST["email"])) && (!empty($_POST["message"]))) {
        echo "*Email is required";
    } else if ((empty($_POST["name"])) && (empty($_POST["email"])) && (!empty($_POST["message"]))) {
        echo "*Name & Email are required";
    } else if ((empty($_POST["name"])) && (!empty($_POST["email"])) && (empty($_POST["message"]))) {
        echo "*Name & Message are required";
    } else if ((!empty($_POST["name"])) && (empty($_POST["email"])) && (empty($_POST["message"]))) {
        echo "*Email & Message are required";
    } else if ((empty($_POST["name"])) && (empty($_POST["email"])) && (empty($_POST["message"]))) {
        echo "*Name, Email & Message are required";
    } else {
        if ((strlen($name) > MAX_NAME_LENGTH) && (filter_var($email, FILTER_VALIDATE_EMAIL)) && (strlen($message) <= MAX_MESSAGE_LENGTH)) {
            echo "*Name is not vaild.";
        } else if ((strlen($name) <= MAX_NAME_LENGTH) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (strlen($message) <= MAX_MESSAGE_LENGTH)) {
            echo "*Email is not vaild.";
        } else if ((strlen($name) <= MAX_NAME_LENGTH) && (filter_var($email, FILTER_VALIDATE_EMAIL)) && (strlen($message) > MAX_MESSAGE_LENGTH)) {
            echo "*Message legenth has to be less 225.";
        } else if ((strlen($name) > MAX_NAME_LENGTH) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (strlen($message) <= MAX_MESSAGE_LENGTH)) {
            echo "*Name & Email are not vaild.";
        } else if ((strlen($name) > MAX_NAME_LENGTH) && (filter_var($email, FILTER_VALIDATE_EMAIL)) && (strlen($message) > MAX_MESSAGE_LENGTH)) {
            echo "*Name & Message are not vaild.";
        } else if ((strlen($name) <= MAX_NAME_LENGTH) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (strlen($message) > MAX_MESSAGE_LENGTH)) {
            echo "*Email & Message are not vaild.";
        } else if ((strlen($name) > MAX_NAME_LENGTH) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (strlen($message) > MAX_MESSAGE_LENGTH)) {
            echo "*Name, Email & Message are not vaild.";
        }else{
            print_confirmation_page();
            save_to_file();
        }
    }
}
}
    function clearBtn() {
        $name = "";
        $email = "";
        $message = "";
    }
    function save_to_file() {
        $fp = fopen(_Saving_File_, "a+");
        $date=date("d M Y h:i:s A");
        $ip=$_SERVER['REMOTE_ADDR'];

        $written_string ="$date , $ip , $_POST[name] , $_POST[email]";
        fwrite($fp, $written_string.PHP_EOL);
        fclose($fp);
    }
    function print_confirmation_page() {
        echo "<center><h2>" . _THANK_YOU_MESSAGE . "</H2></center>";
        echo str_repeat("*", 100);
        foreach ($_POST as $key => $value) {
                $value = strtolower(trim($value));
                echo "<br/><strong> $key </strong> : $value";
        }
        

    }
    function convert_file_to_array() {
        return file(_Saving_File_);
    }
?>