<?php
require_once("vendor/autoload.php");
if (!empty($_POST)) {

    $error = validate_form();
    
    if(empty($error)){
       save_to_file();
       print_confirmation_page();
       exit();
    }
    
}

$parameter = isset($_GET["page"]) ? $_GET["page"] : "";
if ($parameter === "logfile")
    require_once("./views/users.php");
else
    require_once("./views/form.php");

?>
