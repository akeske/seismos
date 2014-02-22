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
		$totalearthquakes[$i] = $row['totalearthquakes'];
		$min[$i] = $row['minMagn'];
		$max[$i] = $row['maxMagn'];
		$steps[$i] = round( $row['steps'] );
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
	//	echo $y."  --> ";
		for($i=1; $i<=$steps[$y]; $i++){
			$tempMax = $min[$y] + $i*$DM;
		//	$tempMin = $tempMax - $DM;
			$counter = 0;
		//	echo $tempMax." ";
			$temp = $x;
			for($z=0; $z<$totalearthquakes[$y]; $z++){

			//	echo $megethos[$x]." - ".$year[$x]." -- ";
				if($megethos[$x]>=$min[$y] && $megethos[$x]<=$tempMax){
			//		echo "  ".$x."  ".$i.") ".$min[$y]."-".$tempMax."  ->  ";
					$counter++;
					
			//		echo $counter." , ".$megethos[$x]."     ";
			//		echo $megethos[$x];
				}
				$x++;
				
			}
	//		echo " <br> ";
			$sumParanomastis += $i*$counter;
	//		echo $x;
			$x -= $totalearthquakes[$y];
		//	echo $sumParanomastis."   -";
		}
		$x += $totalearthquakes[$y];
		if($sumParanomastis!=0){
			$logarithmos = 1 + $totalearthquakes[$y]/$sumParanomastis;
		}
	//	echo $sumParanomastis." - ";
		$b1[$y] = round( log($logarithmos, 10)/$DM, 4);
	//	echo " <br> ";
		
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
