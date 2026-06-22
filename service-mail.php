<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // FORM DATA
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $description = $_POST['description'];

    // CREATE MAIL
    $mail = new PHPMailer(true);

    try {

        // SMTP SETTINGS
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // YOUR EMAIL
        $mail->Username = 'testmailalert20@gmail.com';

        // YOUR APP PASSWORD
        $mail->Password = 'qwghdvduxumxjidk';

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // FROM
        $mail->setFrom($email, $name);

        // TO
        $mail->addAddress('testmailalert20@gmail.com');

        // HTML EMAIL
        $mail->isHTML(true);

        // SUBJECT
        $mail->Subject = "New Service Inquiry";

        // BODY
        $mail->Body = "

        <h2>New Service Inquiry</h2>

        <p><b>Name:</b> $name</p>

        <p><b>Email:</b> $email</p>

        <p><b>Phone:</b> $phone</p>

        <p><b>Service Required:</b> $service</p>

        <p><b>Project Description:</b><br>$description</p>

        ";

        // SEND
        $mail->send();

        echo "

        <script>

            alert('Inquiry Submitted Successfully!');

            window.location.href='index.html';

        </script>

        ";

    } catch (Exception $e) {

        echo "

        <script>

            alert('Mail Failed: {$mail->ErrorInfo}');

            window.history.back();

        </script>

        ";

    }

}

?>