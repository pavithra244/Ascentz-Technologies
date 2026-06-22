<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // FORM VALUES
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $technology = $_POST['technology'];
    $qualification = $_POST['qualification'];

    // CREATE MAIL
    $mail = new PHPMailer(true);

    try {

        // SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // YOUR MAIL
        $mail->Username = 'testmailalert20@gmail.com';

        // APP PASSWORD
        $mail->Password = 'qwghdvduxumxjidk';

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // FROM
        $mail->setFrom($email, $name);

        // TO
        $mail->addAddress('testmailalert20@gmail.com');

        // HTML
        $mail->isHTML(true);

        // SUBJECT
        $mail->Subject = 'New Final Year Project Inquiry';

        // BODY
        $mail->Body = "

        <h2>Final Year Project Inquiry</h2>

        <p><b>Name:</b> $name</p>

        <p><b>Email:</b> $email</p>

        <p><b>Phone:</b> $phone</p>

        <p><b>Technology:</b> $technology</p>

        <p><b>Qualification:</b> $qualification</p>

        ";

        // SEND
        $mail->send();

        echo "

        <script>

            alert('Details Submitted Successfully!');

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