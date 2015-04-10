<?php
	//for results date 2
	$sqlD3 = "SELECT date, lat, lng, vathos, megethos, type, typeSize FROM seismos
		WHERE date>=$fromdate3 AND date<=$todate3 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY $order $orderby";
	$time_start3 = microtime(true);
	$resultD3 = mysql_query($sqlD3);
	$time_end3 = microtime(true);
	$time3 = $time_end3 - $time_start3;
	$time3 = number_format($time3,4, ',', '');
	//for xml file
	$_SESSION['sqlD3'.$k3]=$sqlD3; 
	
	//for graph
	$sqlgrD3 = "SELECT date, megethos FROM seismos
		WHERE date>=$fromdate3 AND date<=$todate3 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY date";	
	$_SESSION['sqlgraphD3'.$k3]=$sqlgrD3;
	
	//for graphMagn
	//for compare with date 3
	$sqlgrmgnD3 = "SELECT megethos FROM seismos
		WHERE date>=$fromdate3 AND date<=$todate3 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY megethos";	
	$_SESSION['sqlgraphmagnD3'.$k3]=$sqlgrmgnD3;
	
	//for graphMagnPerYear
	$sqlgrmgnyearD3 = "SELECT date FROM seismos
		WHERE date>=$fromdate3 AND date<=$todate3 AND 
		lat>=$flat[$j] AND lat<=$tlat[$j] AND 
		lng>=$flng[$i] AND lng<=$tlng[$i] AND 
		vathos>=$fromdpth AND vathos<=$todpth AND 
		megethos>=$frommagn AND megethos<=$tomagn
		ORDER BY date";	
	$_SESSION['sqlgrmgnyearD3'.$k3]=$sqlgrmgnyearD3;
	
	//counter per grid
	$total_recordsD3=mysql_num_rows($resultD3);
?>