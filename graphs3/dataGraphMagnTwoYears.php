<?php
	session_start();
	include("../inc/database.php");
	$n=$_GET['n3'];
	$sqlgraphmagn1 = $_SESSION['sqlgraphmagnD1'.$n];
	$resultgraphmagn1 = mysql_query($sqlgraphmagn1);
	$sqlgraphmagn2 = $_SESSION['sqlgraphmagnD2'.$n];
	$resultgraphmagn2 = mysql_query($sqlgraphmagn2);
	$sqlgraphmagn3 = $_SESSION['sqlgraphmagnD3'.$n];
	$resultgraphmagn3 = mysql_query($sqlgraphmagn3);
	
	$vima=0.1;
	$a=0;
	for($i=$_SESSION['frommagn']; $i<$_SESSION['tomagn']+$vima; $i=$i+$vima) {
		$xmagn[$a]=$i;
		$ymagn1[$a]=0;
		$ymagn2[$a]=0;
		$ymagn3[$a]=0;
		$a++;
	}
	
	$_SESSION['xmagnyearD3']=$xmagn;
	
	while($rowgraphmagn1 = mysql_fetch_array($resultgraphmagn1)) {
		$magn = (float) $rowgraphmagn1['megethos'];
		$k=0;
		for($i=$_SESSION['frommagn']; $i<$_SESSION['tomagn']+$vima; $i=$i+$vima) {
			if( $magn == "$i" ) {
				$ymagn1[$k]++;
				break;
			}
			$k++;
		}
	}
	
	while($rowgraphmagn2 = mysql_fetch_array($resultgraphmagn2)) {
		$magn = (float) $rowgraphmagn2['megethos'];
		$k=0;
		for($i=$_SESSION['frommagn']; $i<$_SESSION['tomagn']+$vima; $i=$i+$vima) {
			if( $magn == "$i" ) {
				$ymagn2[$k]++;
				break;
			}
			$k++;
		}
	}
	
	while($rowgraphmagn3 = mysql_fetch_array($resultgraphmagn3)) {
		$magn = (float) $rowgraphmagn3['megethos'];
		$k=0;
		for($i=$_SESSION['frommagn']; $i<$_SESSION['tomagn']+$vima; $i=$i+$vima) {
			if( $magn == "$i" ) {
				$ymagn3[$k]++;
				break;
			}
			$k++;
		}
	}
	
	$_SESSION['sendgraphmagnyear1D3']=$ymagn1;
	for($i=0; $i<10; $i++) {
		
//	echo $ymagn1[$i];
}
	$_SESSION['sendgraphmagnyear2D3']=$ymagn2;
	$_SESSION['sendgraphmagnyear3D3']=$ymagn3;
	mysql_free_result($resultgraphmagn1);
	mysql_free_result($resultgraphmagn2);
	mysql_free_result($resultgraphmagn3);
?>