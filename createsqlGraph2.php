<?php
	//for results date 2
	$sqlD2 = "SELECT date, lat, lng, vathos, megethos, type FROM seismos
		WHERE date>=$fromdate2 AND date<=$todate2 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY $order $orderby";
	$time_start2 = microtime(true);
	$resultD2 = mysql_query($sqlD2);
	$time_end2 = microtime(true);
	$time2 = $time_end2 - $time_start2;
	$time2 = number_format($time2,4, ',', '');
	//for xml file
	$_SESSION['sqlD2'.$k2]=$sqlD2; 
	
	//for graph
	$sqlgrD2 = "SELECT date, megethos FROM seismos
		WHERE date>=$fromdate2 AND date<=$todate2 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY date";	
	$_SESSION['sqlgraphD2'.$k2]=$sqlgrD2;
	
	//for graphMagn
	//for compare with date 1
	$sqlgrmgnD2 = "SELECT megethos FROM seismos
		WHERE date>=$fromdate2 AND date<=$todate2 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY megethos";	
	$_SESSION['sqlgraphmagnD2'.$k2]=$sqlgrmgnD2;
	
	//for graphMagnPerYear
	$sqlgrmgnyearD2 = "SELECT date FROM seismos
		WHERE date>=$fromdate2 AND date<=$todate2 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY date";	
	$_SESSION['sqlgrmgnyearD2'.$k2]=$sqlgrmgnyearD2;
	
	//counter per grid
	$total_recordsD2=mysql_num_rows($resultD2);
?>