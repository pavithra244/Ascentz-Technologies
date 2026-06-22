<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // GET FORM DATA
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $project = $_POST['project'];
    $message = $_POST['message'];

    // CREATE MAIL
    $mail = new PHPMailer(true);

    try {

        // SMTP SETTINGS
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // YOUR GMAIL
        $mail->Username = 'testmailalert20@gmail.com';

        // APP PASSWORD
        $mail->Password = 'qwghdvduxumxjidk';

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // FROM
        $mail->setFrom('testmailalert20@gmail.com', 'Ascentz Website');

        // TO
        $mail->addAddress('testmailalert20@gmail.com');

        // EMAIL FORMAT
        $mail->isHTML(true);

        // SUBJECT
        $mail->Subject = 'New Project Request';

        // BODY
        $mail->Body = "

        <h2>New Project Request</h2>

        <p><b>Name:</b> $name</p>

        <p><b>Email:</b> $email</p>

        <p><b>Phone:</b> $phone</p>

        <p><b>Project:</b> $project</p>

        <p><b>Message:</b><br>$message</p>

        ";

        // SEND
        $mail->send();

        echo "

        <script>

            alert('Request Submitted Successfully!');

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