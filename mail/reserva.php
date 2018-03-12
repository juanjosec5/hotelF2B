<?php
// Check for empty fields
if(empty($_POST['name'])   ||
   empty($_POST['email'])  ||
   empty($_POST['phone'])  ||
   empty($_POST['dateIn'])   ||
   empty($_POST['dateOut'])   ||
   empty($_POST['personas'])   ||
   empty($_POST['hostal'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
{
    echo "No arguments Provided!";
    return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$dateIn = strip_tags(htmlspecialchars($_POST['dateIn']));
$dateOut = strip_tags(htmlspecialchars($_POST['dateOut']));
$personas = strip_tags(htmlspecialchars($_POST['personas']));
$hostal = strip_tags(htmlspecialchars($_POST['hostal']));

// Create the email and send the message
$to = 'gerencia@f2b.com.co'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "Haz recibido un correo de RESERVA.\n\n"."Los detalles:
\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nDateIn: $dateIn\n\nDateOut: $dateOut\n\nPersonas:$personas\n\nHostal:$hostal ";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>