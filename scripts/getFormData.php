<?php
require '../vendor/autoload.php';
require '../vendor/slim/slim/Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->post('/form', function () use ($app) {
    $headers = $app->request->headers;
    $host = $app->request->headers->get('Host');
    if($host === "4dlocalmovers.com") {
        $emailSubject = 'Customer Has a Question!';
        $webMaster = 'info@4dlocalmovers.com';
        require './formBody.php';
        $headers = "Content-type: text/html\r\n";
        $success = mail($webMaster, $emailSubject, $body, $headers);
        if($success) {
            $app->response->setBody("Success");
            $app->response->setStatus(200);
        }else {
            $app->halt(500, "We're having technical dificulties.  Please try again later, or contact us directly by phone.");
        }
    }else {
        $app->pass();
    }
});

$app->run();