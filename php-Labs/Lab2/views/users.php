<?php $users = convert_file_to_array();
$counter=0;
foreach($users as $user){
    $counter++;
    $user_details = explode(",",$user);
      echo "<h2>User #$counter</h2>";
      echo str_repeat("*", 100);
        echo "<Div>";
        echo "<h3>Visit Date : $user_details[0]</h3>";
        echo "<h3>IP Address : $user_details[1]</h3>";
        echo "<h3>Email : $user_details[3]</h3>";
        echo "<h3>Name : $user_details[2]</h3>";
        echo "</br></br></div>";
}
?>