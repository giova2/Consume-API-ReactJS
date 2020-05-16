<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
set_time_limit(0);
date_default_timezone_set('Europe/Andorra');
require("vendor/autoload.php");
$url_json_placeholder = "https://jsonplaceholder.typicode.com/";
/**
 * API DE JSONPLACEHOLDER
 */

if(isset($_GET['users'])){
    $client = new GuzzleHttp\Client();
    $response = $client->request('GET', $url_json_placeholder.'users',[
        'exceptions' => false, // Para que no muestre Excepciones
        //'verify' => false, //si no deseas verificar certificado.
        //'verify' => './cacert.pem', //si deseas verificar certificado.
        //'auth' => array('user', 'pass'),
        // 'headers' => [
        //     'Authorization' => 'Bearer '.$_GET['Authorization']
        // ]
    ]);
    $response->getStatusCode(); // devuelve el Código de estado HTTP
    echo $response->getBody(); // Devuelve el contenido de la respuesta.
    die();
}

if(isset($_GET['users']) &&  $_GET['users'] !== ''){
    $client = new GuzzleHttp\Client();
    $response = $client->request('GET', $url_json_placeholder.'users/'.$_GET['users'],[
        'exceptions' => false, // Para que no muestre Excepciones
        //'verify' => false, //si no deseas verificar certificado.
        //'verify' => './cacert.pem', //si deseas verificar certificado.
        //'auth' => array('user', 'pass'),
        // 'headers' => [
        //     'Authorization' => 'Bearer '.$_GET['Authorization']
        // ]
    ]);
    $response->getStatusCode(); // devuelve el Código de estado HTTP
    echo $response->getBody(); // Devuelve el contenido de la respuesta.
    die();
}