<?php
	session_start();
	include("../inc/database.php");
	$l=$_GET['l2'];
	$sqlgraphmagn = $_SESSION['sqlgraphmagnD2'.$l];
	$resultgraphmagn = mysql_query($sqlgraphmagn);
	$vima=0.1;
	$a=0;
	for($i=$_SESSION['frommagn']; $i<$_SESSION['tomagn']+$vima; $i=$i+$vima) {
		$xmagn[$a]=$i;
		$ymagn[$a]=0;
		$a++;
	}
//	for($i=0; $i<count($xmagn); $i++) {
//		echo $xmagn[$i];
//		echo "<br>";
//	}
//	echo "<br>";
//	echo count($ymagn);
//	echo "<br>";
//	echo count($xmagn);
	$_SESSION['xmagnD2']=$xmagn;
	while($rowgraphmagn = mysql_fetch_array($resultgraphmagn)) {
		$magn = (float) $rowgraphmagn['megethos'];
		$k=0;
		for($i=$_SESSION['frommagn']; $i<$_SESSION['tomagn']+$vima; $i=$i+$vima) {
			if( $magn == "$i" ) {
				$ymagn[$k]++;
				break;
			}
			$k++;
		}
	}
//	for($i=0; $i<count($xmagn); $i++) {
//		echo $xmagn[$i];
//		echo "<br>";
//	}
//	echo count($ymagn);
//	echo "<br>";
//	echo count($xmagn);
	$_SESSION['sendgraphmagnD2']=$ymagn;
	mysql_free_result($resultgraphmagn);
?>