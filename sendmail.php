<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    
    //От кого
    $mail->setFrom('carlounge96@fls.ru','CarLounge96');
    //кому
    $mail->addAddress('facelessperformer@yandex.ru');
    //Тема
    $mail->Subject = 'Новая заявка:';

    //Тело письма
    $body = '<h1>Пришла новая заявка</h1>'

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['mail']))){
        $body.='<p><strong>Почта: </strong> '.$_POST['mail'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Телефон: </strong> '.$_POST['phone'].'</p>';
    }

    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else{
        $message = 'Данные отправлены!';
    }
    
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>