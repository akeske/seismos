<?php
$time_start = microtime(true);
$totalseismoi=0;
for ($k=1964;$k<=2013;$k++){
	$counter=0;
	if ( $k<1981 ) {
		$lines = file("http://www.gein.noa.gr/HTML/Noa_cat/cat".$k.".txt");
	//	http://www.gein.noa.gr/HTML/Noa_cat/cat1964.txt
	//	http://www.gein.noa.gr/HTML/Noa_cat/CAT2000.TXT
	//	http://www.gein.noa.gr/HTML/Noa_cat/CAT2011.TXT
	//	http://www.gein.noa.gr/HTML/Earthquake_Catalogue_el.html
	}else{
		$lines = file("http://www.gein.noa.gr/HTML/Noa_cat/CAT".$k.".TXT");
	}
//	if ( !file_exists($lines) ) {
//		$lines = file("http://www.gein.noa.gr/services/Noa_cat/CAT".$k.".TXT");
//	}
	$result = mysql_query("select max(idyear) from seismos where year=$k");
	$row = mysql_fetch_array($result);
	$maxnumberline = $row['max(idyear)']+1;

//	echo $maxnumberline."seismoi";
//	echo "<br>";
	$i=0;
	if(isset($maxnumberline)){
		if ( $maxnumberline==null ) { $j=1; } else { $j=$maxnumberline; }
	}
	//$j=1;
	foreach ($lines as $line_num => $line) {
		if ($line_num==0 || $line_num==1) { continue; }
		if ($line[0]=="1") { continue; }
		if ($line[0]=="2") { continue; }
		if(isset($maxnumberline)){
			if ($line_num<=$maxnumberline) { continue; }
		}
	//	$line = htmlspecialchars($line);
		$char=$line;
		if( strlen($line)<2 ){
			break;
		}
		$etos[$j]=$char[1].$char[2].$char[3].$char[4];
		$minas[$j]=$char[6].$char[7].$char[8];
		if( $char[10]==" " ){
			$char[10]=0;
		}
		$mera[$j]=$char[10].$char[11];
		if( $char[21]==" " ){
			$char[21]=0;
		}
		if( $char[22]==" " ){
			$char[22]=0;
		}
		$wra[$j]=$char[15].$char[16];
		$lepta[$j]=$char[18].$char[19];
		if($char[21]=="6") {
			$deut[$j]="00";
		}else{
			$deut[$j]=$char[21].$char[22];
		}
		$lat[$j]=$char[28].$char[29].$char[30].$char[31].$char[32];
		$long[$j]=$char[36].$char[37].$char[38].$char[39].$char[40];
		$depth[$j]=$char[44].$char[45];
		$magnitude[$j]=$char[55].$char[56].$char[57];
	//	echo $magnitude[$j]."<br>";
		if( $char[55]==""){
			$etos[$j]="";
		}
	//	echo $j."-- ".$lat[$j]." ".$long[$j]." ".$depth[$j]." ".$magnitude[$j]."<br>";
		$j++;
		$i=0;
	}
//	echo $j;
//	break;
	for($a=$maxnumberline; $a<$j; $a++){
		if( $minas[$a]=="JAN" ){
			$month[$a]="01";
		}
		if( $minas[$a]=="FEB" ){
			$month[$a]="02";
		}
		if( $minas[$a]=="MAR" ){
			$month[$a]="03";
		}
		if( $minas[$a]=="APR" ){
			$month[$a]="04";
		}
		if( $minas[$a]=="MAY" ){
			$month[$a]="05";
		}
		if( $minas[$a]=="JUN" ){
			$month[$a]="06";
		}
		if( $minas[$a]=="JUL" ){
			$month[$a]="07";
		}
		if( $minas[$a]=="AUG" ){
			$month[$a]="08";
		}
		if( $minas[$a]=="SEP" ){
			$month[$a]="09";
		}
		if( $minas[$a]=="OCT" ){
			$month[$a]=10;
		}
		if( $minas[$a]=="NOV" ){
			$month[$a]=11;
		}
		if( $minas[$a]=="DEC" ){
			$month[$a]=12;
		}
	}
	for($b=$maxnumberline; $b<$j; $b++) {
	//	$finaldate[$b]=$etos[$b].$month[$b].$mera[$b].$wra[$b];
		$finaldate[$b]=$etos[$b]."-".$month[$b]."-".$mera[$b]." ".$wra[$b].":".$lepta[$b].":".$deut[$b];
	//	echo $finaldate[$b]."<br>";
		if ($depth[$b]<15) {
			if ($magnitude[$b]<=2.5)
				$type[$b]=0;
			else if ($magnitude[$b]<=4)
				$type[$b]=1;
			else if ($magnitude[$b]<=5)
				$type[$b]=2;
			else
				$type[$b]=3;
		}else if($depth[$b]<30) {
			if ($magnitude[$b]<=2.5)
				$type[$b]=4;
			else if ($magnitude[$b]<=4)
				$type[$b]=5;
			else if ($magnitude[$b]<=5)
				$type[$b]=6;
			else
				$type[$b]=7;
		}else if($depth[$b]<60) {
			if ($magnitude[$b]<=2.5)
				$type[$b]=8;
			else if ($magnitude[$b]<=4)
				$type[$b]=9;
			else if ($magnitude[$b]<=5)
				$type[$b]=10;
			else
				$type[$b]=11;
		}else if($depth[$b]<100) {
			if ($magnitude[$b]<=2.5)
				$type[$b]=12;
			else if ($magnitude[$b]<=4)
				$type[$b]=13;
			else if ($magnitude[$b]<=5)
				$type[$b]=14;
			else
				$type[$b]=15;
		}else{
			if ($magnitude[$b]<=2.5)
				$type[$b]=16;
			else if ($magnitude[$b]<=4)
				$type[$b]=17;
			else if ($magnitude[$b]<=5)
				$type[$b]=18;
			else
				$type[$b]=19;
		}
		if ($magnitude[$b]<3)
			$typeSize[$b]=1; //
		else if ($magnitude[$b]<4)
			$typeSize[$b]=2; // mauro
		else if ($magnitude[$b]<5)
			$typeSize[$b]=3; // prasino
		else if ($magnitude[$b]<6)
			$typeSize[$b]=4; // kokkino
		else
			$typeSize[$b]=5; // kitrino
	}
//	for($c=$maxnumberline;$c<$j;$c++){
//		echo $finaldate[$c]."--";
//		echo $lat[$c]."-".$long[$c]."-".$depth[$c]."-".$magnitude[$c]."<br />";
//	}
	for($d=$maxnumberline;$d<$j;$d++) {
		if($etos[$d]!=""){
			$sqlDb = "INSERT INTO `seismos` (`idyear`, `year`, `month`, `name`, `info`, `lat`, `lng`, `megethos`, `vathos`, `type`, `typeSize`, `date`) VALUES
			($d, $etos[$d], $month[$d], 'Athens[$etos[$d]][$d]','' , $lat[$d], $long[$d], $magnitude[$d], $depth[$d], $type[$d], $typeSize[$d], '$finaldate[$d]' );";
	//		echo $sqlDb."<br>";
			// Execute query
			if ( mysql_query($sqlDb,$con) ) {
				$counter++;
			}else{
				echo "Error inserting to database: " . mysql_error()."</br>".$sqlDb."<br><br>";
			}
		}else{
			continue;
		}
	}
//	if( $counter==$j ) {
//		echo "Correctly <b>$file</b> inserted in database with $counter earthquakes";
//		echo "<br>";
//	}
	unset($line);
	unset($etos);
	unset($minas);
	unset($mera);
	unset($lat);
	unset($long);
	unset($depth);
	unset($magnitude);
	unset($char);
	unset($j);
	$totalseismoi+=$counter;
	echo "Έχουν γίνει ".$counter." σεισμοί το έτος $k<br>";
}
$time_end = microtime(true);
$time = $time_end - $time_start;
echo "<br> Έχουν γίνει ".$totalseismoi." σεισμοί συνολικά <br>";
echo "<br> Χρόνος για την εισαγωγή των δεδομένων: ".$time." δευτερόλεπτα<br><br>";
echo "Αναβαθμήστε τη βάση σας με του σεισμούς που έγιναν μέχρι σήμερα πατώντας <a href='insertdata.php'>εδώ</a>";

?>
