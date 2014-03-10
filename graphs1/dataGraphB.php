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
		$monthGroup[$i] = $row['month'];
		$yAxis[$i] = $monthGroup[$i]." / ".$yearGroup[$i];
		$totalearthquakes[$i] = $row['totalearthquakes'];
		$min[$i] = $row['minMagn'];
		$max[$i] = $row['maxMagn'];
		$steps[$i] = round( $row['steps'] );
		if($steps[$i]==0) $steps[$i]=1;
	//	echo $steps[$i]."<br>";
		$i++;
	}

	$i = 0;
	while($rowgraph = mysql_fetch_array($resultgraph)) {
		$megethos[$i] = $rowgraph['megethos'];
		$year[$i] = $rowgraph['year'];
		$month[$i] = $rowgraph['month'];
		$i++;
	}

	$DM = 0.2;
	$x = 0;
// echo $steps[0];
	for($y=0; $y<count($yearGroup); $y++){
		$sumParanomastis = 0;
	//	echo $x."--> ";
	//	echo $y."--> ||| <br>";
		for($i=1; $i<=$steps[$y]; $i++){
			$tempMax = $min[$y] + $i*$DM;
		//	$tempMin = $tempMax - $DM;
			$counter = 0;
		//	echo $tempMax." ";
		//	$temp = $x;
			for($z=0; $z<$totalearthquakes[$y]; $z++){

	//			echo $x." - ".$megethos[$x]." - ".$year[$x]." -- ";
				if($megethos[$x]>=$min[$y] && $megethos[$x]<=$tempMax){
	//				echo " [thesi:".$x."  step:".$i." ::".$min[$y]."-".$tempMax."  ->  ";
					$counter++;
					
	//				echo $counter." , ".$megethos[$x]."]  ";
			//		echo $megethos[$x];
				}
				$x++;
				
			}
			
			$sumParanomastis += $i*$counter;
	//		echo " suparam:".$sumParanomastis;
	//		echo "<br>";
			$x -= $totalearthquakes[$y];
			
		}
	//	echo " paranom:".$totalearthquakes[$y]."/".$sumParanomastis."<br>";
		$x += $totalearthquakes[$y];
		if($sumParanomastis!=0){
			$logarithmos = 1 + $totalearthquakes[$y]/$sumParanomastis;
		}
	//	echo " log:".$logarithmos;
		$b1[$y] = round( log($logarithmos, 10)/$DM, 4);
	//	echo $b1[$y];
	//	echo " <br> ";
	//	echo " <br>-----<br> ";
	}
//	echo $logarithmos."   -";
	for($y=0; $y<count($yearGroup); $y++){
	//	echo $yAxis[$y]."  ->  ".$b1[$y]."<br>";
	}

	$_SESSION['b1']=$b1;
	$_SESSION['year1']=$yAxis;
	mysql_free_result($resultgraph);
	mysql_free_result($result);
?>
