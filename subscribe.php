<?php 
include('config.php');

$db = mysqli_connect ($db_host, $db_user, $db_password, $db_name) OR die ('Could not connect to MySQL: ' . mysqli_connect_error());

$name = mysqli_real_escape_string($db,$_POST['name']);

$email = mysqli_real_escape_string($db,$_POST['email']);

 if(empty($email) && empty($name)){
        $status = "error";
        $message = "Nothing was entered...";
    }

else if(empty($email)){
        $status = "error";
        $message = "We need an email!";
    }

else if(empty($name)){
        $status = "error";
        $message = "We need a name!";
    }

else if((filter_var($email, FILTER_VALIDATE_EMAIL)) == FALSE ) {
        $status = "error";
        $message = "Sorry, invalid email";
    
}



else {
    $sql = "SELECT * FROM CFT_email WHERE email_address='$email'";
    $existingSignup = mysqli_query($db,$sql);  
       if(mysqli_num_rows($existingSignup) > 1){
        
               $status = "error";
        $message = "This email is already registered";
           
       }
    
        
        else {
         
            
          $sql = "INSERT INTO CFT_email (email_name, email_address) VALUES ('$name','$email')";
            mysqli_query($db,$sql);  
      $status = "success";
        $message = "Thanks! You've been added to our list and we'll be sending you updates soon.";
    
}


}



$json = array(
     'status' => $status,
    'message' => $message
);

$output = json_encode($json);

echo $output;






?>