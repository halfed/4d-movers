<?php
	$_POST = json_decode(file_get_contents("php://input"),true);
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$startAddress = $_POST['addressPickUp'];
	$startAddress2 = $_POST['addressPickUp2'];
	$startCity = $_POST['picUpCity'];
	$startState = $_POST['pickUpState'];
	if($startState === 6) {
		$startState = "Colorado";
	}elseif($startState === 9) {
		$startState = "Florida"
	}
	$startZip = $_POST['pickUpZip'];
	$endAddress = $_POST['addressDropOff'];
	$endAddress2 = $_POST['addressDropOff2'];
	$endCity = $_POST['dropOffCity'];
	$endState = $_POST['dropOffState'];
	if($endState === 6) {
		$endState = "Colorado";
	}elseif($endState === 9) {
		$endState = "Florida"
	}
	$endZip = $_POST['dropOffZip'];
	$startDate = $_POST['startDate'];
	$hour = $_POST['hour'];
	$minute = $_POST['minute'];
	$timeOfDay = $_POST['dayType'];
	$squareFootage = $_POST['squareFootage'];
	$inventory = $_POST['inventory'];
	$questions = $_POST['questions'];
	$terms = $_POST['terms'];

 $body = "
        <br><hr><br>
        First Name: $firstName <br/>
        Last Name: $lastName <br/>
        Email: $email <br/>
        Phone: $phone <br/>
        Address(Pick Up): $startAddress <br/>
        Address 2(Pick Up): $startAddress2 <br/>
        City(Pick Up): $startCity <br/>
        State(Pick Up): $startState <br/>
        Zip(Pick Up): $startZip <br/>
        Address(Drop Off): $endAddress <br/>
        Address 2(Drop Off): $endAddress2 <br/>
        City(Drop Off): $endCity <br/>
        State(Drop Off): $endState <br/>
        Zip(Drop Off): $endZip <br/>
        Start Date: $startDate <br/>
        Start Hour: $hour <br/>
        Start Min: $minute <br/>
        Time Of Day: $timeOfDay <br/>
        Square Footage: $squareFootage <br/>
        Inventory List: $inventory <br/>
        Questions/Conserns: $questions <br/>
        Agree To Terms: $terms <br/>
        ";