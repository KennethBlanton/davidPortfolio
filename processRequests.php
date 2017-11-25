<?php



 echo json_encode($_POST['name'])
$msg = 'name:' . $_POST['name'] . ',project:' . $_POST['project'] . 'contact:' . $_POST['email']
echo $msg;
mail("kennethjblanton@gmail.com","PossibleProject",$msg);
 ?>