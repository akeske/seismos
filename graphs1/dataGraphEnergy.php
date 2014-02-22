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

	$x = 0;
// echo $steps[0];
	for($y=0; $y<count($yearGroup); $y++){
		$sumEnergy[$y] = 0;
		for($z=0; $z<$totalearthquakes[$y]; $z++){
			$energyPerMagn = 1.5*$megethos[$x]+4.7;

			$energy = round(pow( pow(10, $energyPerMagn), 2/3));
			$x++;
			$sumEnergy[$y] += $energy;
		}
	}



	$_SESSION['energy1']=$sumEnergy;
	$_SESSION['year1']=$yearGroup;
	mysql_free_result($resultgraph);
	mysql_free_result($result);
?>
