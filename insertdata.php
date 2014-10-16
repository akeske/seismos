<?php
session_start();
include("inc/database.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Insert data to database</title>
	<link rel="SHORTCUT ICON" href="favicon.ico">
	<meta http-equiv="content-language" content="gr">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="geo.region" content="en-US,GR">
	<meta name="Description" content="">
	<meta name="Keywords" content="">
	<meta name="robots" content="index,follow">
	<link href="css/mycss.css" rel="stylesheet" type="text/css">
	<link href="css/styles.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div id="header">
	<h3>Earthquake Prediction - Greece</h3>
	</div>
	<div id="container">
		<?php include("menu.php"); ?>
		<br>
		<?php
			$logged_in=false;
			if($logged_in){
				echo "Δεν είστε συνδεδεμένος";
			}else{
				$_SESSION['installcan'] = 0;
				if($_SESSION['installcan'] ==0){ ?>		
				<table align="center" border="0" width="900">
				<tr>
					<td align="center">
						<?php
						if (!$con) {
							die('Could not connect: ' . mysql_error())."\n";
						}
						echo "<br>";
						echo "Please wait....<br>";
						include("funcs.php");
						?>
					</td>
				</tr>
				</table>
	<?php	/*	$query5 = "UPDATE users SET installcan=1 WHERE id=".$_SESSION['id'];
					mysql_query($query5,$con)or print("A MySQL error has occurred.<br />Your Query: " . $your_query . "<br /> Error: (" . mysql_errno() . ") " . mysql_error())."\n";
			*/
				}else{
					echo "</br>";
					echo "Έχετε κάνει εγκατάσταη τη βάση δεδομένων, οπότε δεν μπορείτε να την επαναγκαταστήσετε";
					echo "</br>";
					echo "Σας προτίνουμε να κάνετε <b>αναβάθμηση</b> τη βάση από <b><a href='insertdata.php'>εδώ</a></b>";
				} 
			?>
<?php  } ?>
	</div>
	<div id="foot">
	Copyright &copy; 2013 - Thanos Keskempes
	</div>
</body>
</html>