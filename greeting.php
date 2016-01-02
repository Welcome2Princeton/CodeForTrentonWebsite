<?php
	// Build a JSON array
	$json = array(
		"status" => "success",
		"firstname" => $_POST['firstname']
	);

	// Output our response to the browser
	$output = json_encode($json);
	echo $output;
?>