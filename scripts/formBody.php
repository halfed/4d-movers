<?php
	$_POST = json_decode(file_get_contents("php://input"),true);
	
	$firstName = filter_var(trim($_POST['firstName']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	
	$lastName = filter_var(trim($_POST['lastName']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	
	$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
	
	$phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	
	$startAddress = filter_var(trim($_POST['addressPickUp']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	
	$startAddress2 = filter_var(trim($_POST['addressPickUp2']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	
	$startCity = filter_var(trim($_POST['picUpCity']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $startState = filter_var(trim($_POST['pickUpState']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	if($startState == 6) {
		$startState = "Colorado";
	}elseif($startState == 9) {
		$startState = "Florida";
	}
	
	$startZip = filter_var(trim($_POST['pickUpZip']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $endAddress = filter_var(trim($_POST['addressDropOff']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $endAddress2 = filter_var(trim($_POST['addressDropOff2']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $endAddress2 = filter_var(trim($_POST['addressDropOff2']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    
    $endCity = filter_var(trim($_POST['dropOffCity']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    
    $endState = filter_var(trim($_POST['dropOffState']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	if($endState == 6) {
		$endState = "Colorado";
	}elseif($endState == 9) {
		$endState = "Florida";
	}
	
	$endZip = filter_var(trim($_POST['dropOffZip']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	
    $startDate = filter_var(trim($_POST['startDate']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    
    $hour = filter_var(trim($_POST['hour']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    
    $minute = filter_var(trim($_POST['minute']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $timeOfDay = filter_var(trim($_POST['dayType']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $squareFootage = filter_var(trim($_POST['squareFootage']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $inventory = filter_var(trim($_POST['inventory']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $questions = filter_var(trim($_POST['questions']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

    $terms = filter_var(trim($_POST['terms']), FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

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