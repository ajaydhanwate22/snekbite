<?php
require "connection.php";

$response = []; 

$request_body = file_get_contents('php://input');
$_data = json_decode($request_body, true);

$AuthorizesName = trim($_data['AuthorizesName']);
$Password = trim($_data['Password']);


if (empty($AuthorizesName)) {
    $response['message'] = "Authorizes Name is required";
    echo json_encode($response);
    exit();
}

if (empty($Password)) {
    $response['message'] = "Password is required";
    echo json_encode($response);
    exit();
} elseif (strlen($Password) < 6) {
    $response['message'] = "Password must be at least 6 characters";
    echo json_encode($response);
    exit();
}

$hashedPassword = md5($Password);

$checkUser = "SELECT * FROM treatmentcenter WHERE AuthorizesName = '$AuthorizesName'";
$result = mysqli_query($con, $checkUser);

if ($result) {
    if (mysqli_num_rows($result) > 0) {             
        $row = mysqli_fetch_assoc($result);
        if ($hashedPassword === $row['Password']) {
            $response['message'] = "LoggedIn successfully";
            $response['user'] = $row;
        } else {
            $response['message'] = "Password Does Not Match";
        }              
    } else {
        $response['message'] = "User does not exist";
    }
} else {
    $response['message'] = "Please Try After Some Time";
}

echo json_encode($response);
?>
