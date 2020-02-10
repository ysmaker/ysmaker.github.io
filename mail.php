<?php
$name    = $_POST['name'];
$vacancy = $_POST['vacancy'];
$contact = $_POST['contact'];

$to      = 'hr@gta5.net';
$subject = 'Уведомление с сайта GTA5.RU';
$headers = 'From: isaniksa@gmail.com' . "\r\n" .
'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n" .
'Reply-To: gona588a@gmail.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();
$message = "Отклик с сайта\n Имя: $name\n Вакансии:$vacancy \n Контакты:$contact";
// print_r($message);
@mail($to, $subject, $message , $headers);