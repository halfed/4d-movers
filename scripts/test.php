<?php

require '../vendor/autoload.php';

require '../vendor/slim/slim/Slim/Slim.php';
\Slim\Slim::registerAutoloader();



$app = new \Slim\Slim();








$app->post('/form', function ($request, $response) {
//$app->get('/hello/:name', function ($name) use ($app) {


$firstName = $request->getParsedBody()['first-name'];

$app->response->write($firstName);
	$referer = $_SERVER['HTTP_REFERER'];
echo "server: $referer";
//$contentType = $app->response->headers->get('Content-Type');
//echo $contentType;
$test = '';
// Get request headers as associative array
$headers = $app->request->headers;
$host = $app->request->headers->get('Host');
print_r($headers);
if($host === "4dlocalmovers.com") {
	echo "host: $host";
	echo "new change";
}
	
	
	
	
	$emailSubject = 'Customer Has a Question!';
$webMaster = 'ddyytsbv49cd@a2plcpnl0300.prod.iad2.secureserver.net';
$nameField = $_POST ['first-name'];
$body = <<<EOD
<br><hr><br>
First Name: $first-name <br>
EOD;
$headers = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n";


//$success = mail($webMaster, $emailSubject, $body, $headers);
	
	
	
	
	
	
	
    echo "Hello your are, $name";

    $test = $name;

    echo " name: $test";

    
##NEED THAT FOR PHP DEPLOYMENT
///////$app->halt(500, "We're having technical dificulties.  Please try again later, or contact us directly by phone.");

    // use this if trying to access it from out of domain
    //$app->pass();

//$flash = $app->flash("error", "We're having trouble with our mail servers at the moment.  Please try again later, or contact us directly by phone.");
//$app->response->setStatus($flash);

});

// $app->post('/quote', function () {
//     //Create book
//     echo "Hello, form";

//     // the message
// 	$msg = "First line of text\nSecond line of text";

// 	// use wordwrap() if lines are longer than 70 characters
// 	$msg = wordwrap($msg,70);

// 	// send email
// 	mail("someone@example.com","My subject",$msg);
// 	});
$status = $app->response->getStatus();
//$app->response->setStatus($status);
$app->response->setBody($status);

$app->response->write('Bar');


$app->run();



//