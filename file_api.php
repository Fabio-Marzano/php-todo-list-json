<?php
header('Content-Type: application/json');

$jsonCode = file_get_contents('code.json');

echo $jsonCode;