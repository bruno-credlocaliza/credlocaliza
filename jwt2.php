<?php
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-type: application/json");

    $servername = "localhost";
    $database = "Sistema";
    $username = "root";
    $password = "bruno0925";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error);

    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

    $sql = "SELECT usuario FROM Usuario WHERE usuario = '{$usuario}' AND senha = MD5('{$senha}') ";
    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_assoc($result);

    if(empty($row)){
        header('HTTP/1.1 401 Unauthorized'); 
        echo json_encode(array("err"=> "Login incorreto"));
        exit;
    }

    $header = json_encode(['alg' => 'RS256', 'typ' => 'JWT']);
    $payload = json_encode([ 'exp' => time()+3600
                            , 'iat' => time()
                            , 'dados' => $row ]);

	$base64UrlHeader = base64_encode($header);
	$base64UrlPayload = base64_encode($payload);

    $key = "CHAVE";

    $signature = hash_hmac('sha256',"$header.$payload", $key, true);
	$signature = base64_encode($signature);

    $binary_signature = "";
    $algo = "SHA256";
    openssl_sign($base64UrlHeader.".".$base64UrlPayload, $binary_signature, $key, $algo);
    $jwtSign = rtrim(strtr(base64_encode($binary_signature), '+/', '-_'), '=');

    $jwt = $base64UrlHeader.'.'.$base64UrlPayload.'.'.$jwtSign;

    echo json_encode(array("sucess"=> true
                            ,"token" => $jwt));

?>
