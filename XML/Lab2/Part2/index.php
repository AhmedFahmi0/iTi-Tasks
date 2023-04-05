<?php

require_once('functions.php');

$arr = ['name'=>'Ahmed' , 'phone'=>'01145648653' , 'address'=>'smouha', 'email'=>'ahmedfahmi@gmail.com'];
$xmlDocument = new DOMDocument();
$xmlDocument->load("employee.xml");

createPerson($arr, $xmlDocument);

$xmlDocument->save("person.xml");


$persons = $xmlDocument->getElementsByTagName('person'); //return dom node list with all persons tags

$arrOfPersons = [];

foreach ($persons as $person) {
    $arrOfPersons[] = $person ;
}


var_dump(displayPerson($arrOfPersons[0]));
?>