<?php
$allowed_user_agent = "secubrowser";
$current_user_agent = $_SERVER['HTTP_USER_AGENT'];

if ($current_user_agent != $allowed_user_agent) {
    header("HTTP/1.1 403 Forbidden");
    exit("Sorry, this website can only be accessed using Google Chrome.");
}
?>
