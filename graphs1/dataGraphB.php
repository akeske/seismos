<?php
	session_start();
	include("../inc/database.php");
	$b=$_GET['b1'];
	$sqlgraph = $_SESSION['sqlb1'.$b];
	$resultgraph = mysql_query($sqlgraph);

	$sqlgroupyear = $_SESSION['sqlbyear1'.$b];
	$result = mysql_query($sqlgroupyear);
	$i = 0;
	while($row = mysql_fetch_array($result)) {
		$yearGroup[$i] = $row['year'];
		$totalearthquakes = $row['totalearthquakes'];
		$min = $row['minMagn'];
		$max = $row['maxMagn'];
		$steps = round( $row['steps'] );
		$i++;
	}

	$i = 0;
	while($rowgraph = mysql_fetch_array($resultgraph)) {
		$megethos[$i] = $rowgraph['megethos'];
		$year[$i] = $rowgraph['year'];
		$i++;
	}

	$DM = 0.2;
	$x = 0;
// echo $steps[0];
	for($y=0; $y<count($yearGroup); $y++){
		$sumParanomastis = 0;
		for($i=1; $i<=$steps; $i++){
			$tempMax = $min + $i*$DM;
			$tempMin = $tempMax - $DM;
			$counter = 0;
		//	echo $tempMax;
			for($z=0; $z<$totalearthquakes; $z++){

			//	echo $megethos[$x]." - ".$year[$x]." -- ";
				if($megethos[$x]>=$tempMin && $megethos[$x]<=$tempMax){
			//		echo $i." - ".$tempMin." - ".$tempMax."  ->  ";
					$counter++;
					
			//		echo $megethos[$x]." - ".$counter." ** ";
				}
				$x++;
				
			}
		//	echo " <br> ";
			$sumParanomastis += $i*$counter;
			$x -= $totalearthquakes;
		//	echo $sumParanomastis."   -";
		}
		$x += $totalearthquakes;
		if($sumParanomastis!=0){
			$logarithmos = 1 + $totalearthquakes/$sumParanomastis;
		}
	//	echo $sumParanomastis." - ";
		$b1[$y] = round( log($logarithmos, 10)/$DM, 4);
		
	}
//	echo $logarithmos."   -";
	for($y=0; $y<count($yearGroup); $y++){
	//	echo $b1[$y]."   -   ";
	}

	$_SESSION['b1']=$b1;
	$_SESSION['year1']=$yearGroup;
	mysql_free_result($resultgraph);
	mysql_free_result($result);
?>
