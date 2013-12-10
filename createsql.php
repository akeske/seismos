<?php
if($diastaseis==0) $diastaseis=1;
$vimalat=($tolat-$fromlat)/$diastaseis;
$vimalat = number_format($vimalat, 3, '.', '');
$vimalng=($tolng-$fromlng)/$diastaseis;
$vimalng = number_format($vimalng, 3, '.', '');
$flat[0]=$fromlat;
$tlat[0]=$flat[0]+$vimalat;
$flng[0]=$fromlng;
$tlng[0]=$flng[0]+$vimalng;
for($i=1; $i<$diastaseis; $i++) {
	$flat[$i]=$flat[$i-1]+$vimalat;
	$tlat[$i]=$tlat[$i-1]+$vimalat;
	$flng[$i]=$flng[$i-1]+$vimalng;
	$tlng[$i]=$tlng[$i-1]+$vimalng;
}

//for xml file
$k1=0;
$k2=0;
$k3=0;
$_SESSION['diastaseis']=$diastaseis;

//emfanisi plithos seismwn gia tin xroniki periodo 1
$totalearth1=0;
$sqlcount1 = "SELECT COUNT(id) FROM seismos
	WHERE date>=$fromdate1 AND date<=$todate1 AND 
	lat>=$fromlat AND lat<=$tolat AND 
	lng>=$fromlng AND lng<=$tolng AND 
	vathos>=$fromdpth AND vathos<=$todpth AND 
	megethos>=$frommagn AND megethos<=$tomagn";	
$resultcount1 = mysql_query($sqlcount1);
$row1 = mysql_fetch_row($resultcount1); 
$totalearth1 = $row1[0];
//emfanisi plithos seismwn gia tin xroniki periodo 2
$totalearth2=0;
$sqlcount2 = "SELECT COUNT(id) FROM seismos
	WHERE date>=$fromdate2 AND date<=$todate2 AND 
	lat>=$fromlat AND lat<=$tolat AND 
	lng>=$fromlng AND lng<=$tolng AND 
	vathos>=$fromdpth AND vathos<=$todpth AND 
	megethos>=$frommagn AND megethos<=$tomagn";	
$resultcount2 = mysql_query($sqlcount2);
$row2 = mysql_fetch_row($resultcount2); 
$totalearth2 = $row2[0];

//emfanisi plithos seismwn gia tin xroniki periodo 3
$totalearth3=0;
$sqlcount3 = "SELECT COUNT(id) FROM seismos
	WHERE date>=$fromdate3 AND date<=$todate3 AND 
	lat>=$fromlat AND lat<=$tolat AND 
	lng>=$fromlng AND lng<=$tolng AND 
	vathos>=$fromdpth AND vathos<=$todpth AND 
	megethos>=$frommagn AND megethos<=$tomagn";	
$resultcount3 = mysql_query($sqlcount3);
$row3 = mysql_fetch_row($resultcount3);
$totalearth3 = $row3[0];
?>
<!--
<div style="height:580px; width:380px; overflow:auto;">
-->
	<table style="border: 2px solid #97AEC4;" align="center"bgcolor="#8e8e8e">
		<tr>
			<td> <?php
				echo "There have been total <b>".$totalearth1."</b> earthquakes"; ?>
			</td>
			<td> <?php
			echo "There have been total <b>".$totalearth2."</b> earthquakes"; ?>
			</td>
			<td> <?php
				echo "There have been total <b>".$totalearth3."</b> earthquakes"; ?>
			</td>
		</tr>
		<?php
		for($j=0; $j<$diastaseis; $j++) {
			$_SESSION['flatxml'.$j]=$flat[$j];
			$_SESSION['tlatxml'.$j]=$tlat[$j]; ?>
		<tr valign="top">
			<td>
				<?php include('createsqlTable1.php'); ?>
			</td>
			<td>
				<?php include('createsqlTable2.php'); ?>
			</td>
			<td>
				<?php include('createsqlTable3.php'); ?>
			</td>
		</tr>
	<?php } ?>
	</table>
<!--
</div>
-->
<?php
mysql_free_result($resultcount1);
mysql_free_result($resultcount2);
mysql_free_result($resultcount3);
?>