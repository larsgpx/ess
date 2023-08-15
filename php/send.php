<?php 
if(isset($_POST['email'])){
    $to = "contacto@ess.pe"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];        
    $phone = $_POST['phone'];    
    $subject = $name . "te ha contactado desde la web";
    $subject2 = "Copia de contacto desde web";
    $message = $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    }

$para  = 'contacto@ess.pe';

// t¨ªtulo
$t¨ªtulo = $name . " - te ha contactado desde la web de elemental";

// mensaje
$mensaje = '
<html>
<head>
  <title>Te han contactado desde la web de Elemental Base</title>
</head>
<body>
  <table>
    <tr>
      <td><b>Nombre:</b> '.$name.'</td>
    </tr>
    <tr>
      <td><b>Telefono:</b> '.$phone.'</td>
    </tr>
    <tr>
      <td><b>Correo:</b> '.$from.'</td>
    </tr>
   <tr>
      <td><b>Mensaje:</b><br> '.$message.'</td>
    </tr>
  </table>
</body>
</html>
';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Cabeceras adicionales
$cabeceras .= 'From: Elemental Base <no-reply@ess.pe>' . "\r\n";
//$cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
//$cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Enviarlo
mail($para, $t¨ªtulo, $mensaje, $cabeceras);
echo "Correo enviado.Gracias " . $name ." , te contactaremos a la brevedad posible";    
?>