<?php
session_start();
include("inc/database.php");

class Predictions {
	public $id = "";
	public $lat  = "";
	public $lng = "";
	public $fromMagitude = "";
	public $toMagitude  = "";
	public $fromDate = "";
	public $toDate = "";
}

$j=1;
$query = "Select * from predictions";
$result = mysql_query($query);

$json = array();
// Iterate through the rows, printing XML nodes for each

while ( $row = mysql_fetch_array($result) ) {
	$e = new Predictions();
	$e->id = $row['id'];
	$e->lat  = $row['lat'];
	$e->lng = $row['lng'];
	$e->fromMagitude = $row['fromMagitude'];
	$e->toMagitude  = $row['toMagitude'];
	$e->fromDate = $row['fromDate'];
	$e->toDate = $row['toDate'];
	$json['earthquakes'][]=$e;
}
echo json_encode($json);
?>
