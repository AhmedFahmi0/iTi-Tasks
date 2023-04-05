<?php

function createPerson($arr, $xmlDocument)
{
    $root = $xmlDocument->documentElement;
    $employee = $xmlDocument->createElement('person', ' ');

    $name = $xmlDocument->createElement('name', $arr['name']);
    $phone = $xmlDocument->createElement('phone', $arr['phone']);
    $address = $xmlDocument->createElement('address', $arr['address']);
    $email = $xmlDocument->createElement('email', $arr['email']);

    $employee->appendChild($name);
    $employee->appendChild($phone);
    $employee->appendChild($address);
    $employee->appendChild($email);

    $root->appendChild($employee);
}

function displayPerson($person)
{
    $arr = [];

    $arr['name'] = $person->getElementsByTagName('name')->item(0)->nodeValue;
    $arr['phone'] = $person->getElementsByTagName('phone')->item(0)->nodeValue;
    $arr['address'] = $person->getElementsByTagName('address')->item(0)->nodeValue;
    $arr['email'] = $person->getElementsByTagName('email')->item(0)->nodeValue;

    return $arr;
}