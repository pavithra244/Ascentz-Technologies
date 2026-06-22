<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// INCLUDE PHPMAILER FILES
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // FORM VALUES
    $name     = $_POST['name'];
    $email    = $_POST['email'];
    $phone    = $_POST['phone'];
    $college  = $_POST['college'];
    $message  = $_POST['message'];

    // CREATE MAIL INSTANCE
    $mail = new PHPMailer(true);

    try {

        // SMTP SETTINGS
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;

        // YOUR GMAIL
        $mail->Username   = 'testmailalert20@gmail.com';

        // GMAIL APP PASSWORD
        $mail->Password   = 'qwghdvduxumxjidk';

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // FROM
        $mail->setFrom('testmailalert20@gmail.com', 'Internship Application');

        // RECEIVER MAIL
        $mail->addAddress('testmailalert20@gmail.com');

        // FILE UPLOAD
        if (isset($_FILES['resume']) && $_FILES['resume']['error'] == 0) {

            $mail->addAttachment(
                $_FILES['resume']['tmp_name'],
                $_FILES['resume']['name']
            );
        }

        // MAIL FORMAT
        $mail->isHTML(true);

        // SUBJECT
        $mail->Subject = 'New Internship Application';

        // BODY
        $mail->Body = "
        <h2>New Internship Application</h2>

        <p><strong>Name:</strong> $name</p>

        <p><strong>Email:</strong> $email</p>

        <p><strong>Phone:</strong> $phone</p>

        <p><strong>College:</strong> $college</p>

        <p><strong>Message:</strong><br>$message</p>
        ";

        // SEND MAIL
        $mail->send();

        echo "
        <script>
            alert('Application Submitted Successfully!');
            window.location.href='index.html';
        </script>
        ";

    } catch (Exception $e) {

        echo "
        <script>
            alert('Mail Sending Failed!');
            window.history.back();
        </script>
        ";

    }

}
?>