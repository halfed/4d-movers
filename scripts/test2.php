<?php

require '../vendor/autoload.php';

require '../vendor/slim/slim/Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->post('/form', function ($request, $response) {

	$headers = $app->request->headers;
	print_r($headers);

	$host = $app->request->headers->get('Host');

	if($host === "4dlocalmovers.com") {
		echo "host: $host";
		echo "new change";
	}

	$firstName = $request->getParsedBody()['first-name'];

	$app->response->write($firstName);
		$referer = $_SERVER['HTTP_REFERER'];
	echo "server: $referer";

});

$status = $app->response->getStatus();
//$app->response->setStatus($status);
$app->response->setBody($status);

$app->response->write('Bar');


$app->run();



//