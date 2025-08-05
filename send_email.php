<?php
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $name = $_POST['name'];

    $mail = htmlspecialchars($mail);
    $phone = htmlspecialchars($phone);
    $name = htmlspecialchars($name);

    $mail = urldecode($mail);
    $phone = urldecode($phone);
    $name = urldecode($name);

    $mail = trim($mail);
    $phone = trim($phone);
    $name = trim($name);

    if (mail("CarLounge96-detailing@yandex.ru","Новая заявка:", "Почта: ".$mail."\n"."Имя: ".$name."\n"."Телефон: ".$phone."\n","From: info@carlounge96.ru \r\n"))
        {
            echo '<body style="justify-content:center;align-items:center;padding:0; margin: 0; background-repeat: no-repeat; background-size: cover; background-color: #272626";">';
            echo '<head>';
            echo '<meta charset="UTF-8">';
            echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
            echo '<title>Заявка отправлена</title>';
            echo '</head>';
            echo '<div style="padding: 50px;margin: 0 auto;width: 70%;display: block;text-align: center; margin-top: 20px;background-color: #272626">';
            echo '<img style="height:40vh;" src="message.png" alt="Сообщение отправлено">';
            echo '<p style="font-size:35px;color: #09f330;">Заявка отправлена!</p>';
            echo '<a href="./index.html" style="color: #efe8e8;font-size:30px;">Вернуться на главную</a>';
            echo '</div>';
            echo '</body>';
    }
    else{
            echo '<div style="text-align: center; margin-top: 20px;">';
            echo '<img src="message.png" alt="Сообщение отправлено">';
            echo '<p>Сообщение отправлено!</p>';
            echo '</div>';
    }
?>