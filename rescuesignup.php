<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
require "connection.php";


$response = []; 

$request_body = file_get_contents('php://input');
$_data = json_decode($request_body,true);

$username =$_data["Username"];
$age =$_data["Age"];
$gender =$_data["Gender"];
$contactNumber =$_data["ContactNumber"];
$mailid =$_data["Mail"];
$address =$_data["Address"];
$experience =$_data["Experience"];
$education =$_data["Education"];
$rescurID =$_data["RescurId"];
$password =$_data["Password"];
$confirmpassword =$_data["confirmPassword"];



if (empty($username)) {
    $response['message'] = "Username is required";
    echo json_encode($response);
    exit();
}

if (empty($Age)) {
    $response['message'] = "Age is required";
    echo json_encode($response);
    exit();
}


if (empty($gender)) {
    $response['message'] = "Gender is required";
    echo json_encode($response);
    exit();
}



if (empty($contactNumber)) {
    $response['message'] = "Contact number is required";
    echo json_encode($response);
    exit();
} elseif (!is_numeric($contactNumber)) {
    $response['message'] = "Contact number must contain only numbers";
    echo json_encode($response);
    exit();
} elseif (strlen($contactNumber) != 10) {  
    $response['message'] = "Contact number must be 10 digits long";
    echo json_encode($response);
    exit();
}



if (empty($mailid)) {
    $response['message'] = "Email ID is required";
    echo json_encode($response);
    exit();
} 
elseif (!filter_var($mailid, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = "Invalid email format";
    echo json_encode($response);
    exit();
} else {
    $response['message'] = "Email is valid";
    echo json_encode($response);
}


if (empty($address)) {
    $response['message'] = "Address is required";
    echo json_encode($response);
    exit();
} 


if (empty($experience)) {
    $response['message'] = "Experience is required";
    echo json_encode($response);
    exit();
} 

elseif (!is_numeric($experience)) {
    $response['message'] = "Experience must be a number";
    echo json_encode($response);
    exit();
} 
elseif ($experience < 0 || $experience > 50) {
    $response['message'] = "Experience must be between 0 and 50 years";
    echo json_encode($response);
    exit();
} else {
    $response['message'] = "Experience is valid";
    echo json_encode($response);
}

if (empty($education)) {
    $response['message'] = "Education level is required";
    echo json_encode($response);
    exit();
} 

if (empty($rescurID)) {
    $response['message'] = "Rescur ID is required";
    echo json_encode($response);
    exit();
} 
elseif (!is_numeric($rescurID)) {
    $response['message'] = "Rescur ID must be a number";
    echo json_encode($response);
    exit();
} 


if (empty($password)) {
    $response['message'] = "Password is required";
    echo json_encode($response);
    exit();
} elseif (strlen($password) < 6) {
    $response['message'] = "Password must be at least 6 characters";
    echo json_encode($response);
    exit();
}

if ($password !== $confirmpassword) {
    $response['message'] = "Passwords do not match";
    echo json_encode($response);
    exit();
}


$hashedPassword = md5($password);





$checkUser = "SELECT * FROM rescuer WHERE Username = '$username' ";
$checkQuery = mysqli_query($con, $checkUser);

if (mysqli_num_rows($checkQuery) > 0) {
    $response['message'] = 'User already exists';
    echo json_encode($response);
    exit();
} else { 
    $query = "INSERT INTO rescuer(Username, Age, Gender, ContactNumber,Mail,Address,Experience,Education,RescurId,Password) 
    VALUES ('$username', '$age', '$gender', '$contactNumber','$mailid','$address','$experience','$education','$rescurID','$hashedPassword')";
    


    $fire = mysqli_query($con, $query);
    

    if ($fire) {
        $response['message'] = "Registration successfully";
    } else {
        $response['message'] = "Failed";
    }
}

echo json_encode($response);
?>
