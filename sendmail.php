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
    $subject = $_POST['subject'];
    $org = $_POST['org'];
    $message = $_POST['message'];

    // CREATE MAIL
    $mail = new PHPMailer(true);

    try {

        // SMTP SETTINGS
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;

        // YOUR GMAIL
        $mail->Username   = 'testmailalert20@gmail.com';

        // YOUR APP PASSWORD
        $mail->Password   = 'qwghdvduxumxjidk';

        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // FROM
        $mail->setFrom($email, $name);

        // TO
        $mail->addAddress('testmailalert20@gmail.com');

        // EMAIL CONTENT
        $mail->isHTML(true);

        $mail->Subject = 'New Contact Form Message';

        $mail->Body = "
        <h2>New Contact Form Message</h2>

        <p><b>Name:</b> $name</p>

        <p><b>Email:</b> $email</p>

        <p><b>Phone:</b> $phone</p>

        <p><b>Subject:</b> $subject</p>

        <p><b>Organization:</b> $org</p>

        <p><b>Message:</b><br>$message</p>
        ";

        // SEND
        $mail->send();

        echo "
        <script>
            alert('Message Sent Successfully!');
            window.location.href='index.html';
        </script>
        ";

    } catch (Exception $e) {

        echo "
        <script>
            alert('Message Failed: {$mail->ErrorInfo}');
            window.history.back();
        </script>
        ";

    }
}
?>