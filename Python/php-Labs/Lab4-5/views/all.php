<?php
$current_index=isset($_GET["current"]) && is_numeric($_GET["current"])?$_GET["current"]:0;
$items=$db->get_all_records_paginated(array(),$current_index);
$next_index=$current_index + __RECORDS_PER_PAGE__ < 16?$current_index + __RECORDS_PER_PAGE__ :0;
$previous_index=$current_index - __RECORDS_PER_PAGE__ >0?$current_index - __RECORDS_PER_PAGE__:12;
if(isset($_GET['search'])){
    $arrOfProducts = $db->search('product_name' , $_GET['search'] );
        $items = $arrOfProducts;
    }
    if(isset($_GET['delete'])){
        $allItems=$db->get_all_records();
        $db->delete($allItems[$_GET['delete']]['id']);
        }
      /*  if(isset($_GET['update'])){
            db->update({'id'=>$id}, $id);
        }*/

?>
<style>
    table, th, td {
  border: 1px solid;
  margin:5px;
  padding:20px;
}
th{
    background-color:cyan;
}
button {
    font-style: normal;
    height: 40px;
    width: 130px;
    box-sizing: border-box;
    border: transparent;
    border-radius: 60px;
    font-family: 'Raleway', sans-serif;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: #ffffff;
    background-color: black;
    margin-top: 30px;
    text-decoration: none;
    margin:10px;
  }
  input{
    height:50px;
    width:250px;
    background-color:aliceblue;
    border-radius:60px;
    border-style:solid;
    border-color:blue;
  }
  button a{
    color:white;
  }
  a:link { text-decoration: none;
          
        }
  button:hover {
    background-color: #303030;
  }
  #container{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
  }
  #btns button{
    margin:30px;
  }
</style>
<?php
    echo "<div id=container><div id=formCont><form action=".$_SERVER['PHP_SELF']." method=GET>";
    echo "<input type=search name=search placeholder=Product Name>";
    echo "<button type=submit>Search</button></form></div>";?>
<div>
<table>
    <tr>
        <th>Item ID</th>
        <th>Name</th>
        <th>Details</th>
        <th>Delete</th>
    </tr>
    <?php
    $index=$current_index;
    foreach($items as $item){

        echo "<tr><td>".$item["id"]."</td>";
        echo "<td>".$item["product_name"]."</td>";
        echo "<td><a href='".$_SERVER["PHP_SELF"]."?id=".$index."'>view item</a></td>";
        echo "<td><a href='".$_SERVER["PHP_SELF"]."?delete=".$index."'>delete item</a></td></tr>";
        $index++;
    }
    echo "</table></div>";
    echo "<div id=btns>";
    echo "<button type=button><a href='".$_SERVER["PHP_SELF"]."?current=".$previous_index."'>Previous</a></button>";
    echo "<button type=button><a href='".$_SERVER["PHP_SELF"]."?current=".$next_index."'>Next</a></button></div></div>";
?>