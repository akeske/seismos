<?php
session_start();
include("inc/database.php");
//include("csvxml.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
	<link rel="shortcut icon" href="favicon.ico" >
	<title>Earthquake Prediction - Greece</title>

	<meta http-equiv="content-language" content="en">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="Description" content="">
	<meta name="Keywords" content="">
	<meta name="robots" content="index,follow">
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />

	<link href="css/mycss.css" rel="stylesheet" type="text/css">
	<link href="css/styles.css" rel="stylesheet" type="text/css">

	<link rel="stylesheet" type="text/css" href="css/tcal.css" />

	<script src="http://code.jquery.com/jquery-latest.js"></script>

	<script type="text/javascript" src="js/tcal.js"></script>

	<script type="text/javascript" src="http://maps.google.com/maps/api/js?v=3"></script>

	<script type="text/javascript" src="js/achange.js"></script>
	<script type="text/javascript" src="js/util.js"></script>
	<script src="js/tools1.js"></script>
    <script src="js/tools2.js"></script>
    <script src="js/tools3.js"></script>
    <script src="js/tools4.js"></script>
    <script src="js/memory.js"></script>
<!--
    <script src="//code.jquery.com/jquery-1.9.1.js"></script>
-->
	
	
</head>
<body onload="load()">
<?php
	error_reporting (E_ALL ^ E_NOTICE);
	//$_SESSION = array();
	
	$order = $_POST['order'];
	if( $order=="" ) $order='date';
	$_SESSION['order']=$order;
	
	$orderby = $_POST['orderby'];
	if( $orderby=="" ) $orderby='ASC';
	$_SESSION['orderby']=$orderby;
	
	$fromlat = $_POST['fromlat'];
	$tolat = $_POST['tolat'];
	if( $fromlat=="" ) $fromlat=41.7;
	if ( $tolat=="" ) $tolat=33.8;
	$fromlat = number_format($fromlat, 3, '.', '');
	$tolat = number_format($tolat, 3, '.', '');
	$_SESSION['fromlat']=$fromlat;
	$_SESSION['tolat']=$tolat;
	
	$fromlng = $_POST['fromlng'];
	$tolng = $_POST['tolng'];
	if( $fromlng=="" ) $fromlng=17.9;
	if ( $tolng=="" ) $tolng=35;
	$fromlng = number_format($fromlng, 3, '.', '');
	$tolng = number_format($tolng, 3, '.', '');
	$_SESSION['fromlng']=$fromlng;
	$_SESSION['tolng']=$tolng;
	
	$fromdpth = $_POST['fromdpth'];
	$todpth = $_POST['todpth'];
	if( $fromdpth=="" ) $fromdpth=0;
	if ( $todpth=="" ) $todpth=100;
	$_SESSION['fromdpth']=(float) $fromdpth;
	$_SESSION['todpth']=(float) $todpth;
	
	$frommagn = $_POST['frommagn'];
	$tomagn = $_POST['tomagn'];
	if( $frommagn=="" ) $frommagn=5;
	if ( $tomagn=="" ) $tomagn=6.5;
	$_SESSION['frommagn']=(float) $frommagn;
	$_SESSION['tomagn']=(float) $tomagn;
		
	//date 1
	if( $_POST['fromdate1']=="" ) $_POST['fromdate1']="";
	if( $_POST['todate1']=="" ) $_POST['todate1']="";
	$parts1 = explode ('/' , $_POST['fromdate1']);
	$fromday1=$parts1[2];
	$frommonth1=$parts1[1];
	$fromyear1=$parts1[0];
	$_SESSION['fromdate1']=$_POST['fromdate1'];
	$parts2 = explode ('/' , $_POST['todate1']);
	$today1=$parts2[2];
	$tomonth1=$parts2[1];
	$toyear1=$parts2[0];
	$_SESSION['todate1']=$_POST['todate1'];
	$_SESSION['toyear1']=$toyear1;

	//date 2
	if( $_POST['fromdate2']=="" ) $_POST['fromdate2']="";
	if( $_POST['todate2']=="" ) $_POST['todate2']="";
	$parts3 = explode ('/' , $_POST['fromdate2']);
	$fromday2=$parts3[2];
	$frommonth2=$parts3[1];
	$fromyear2=$parts3[0];
	$_SESSION['fromdate2']=$_POST['fromdate2'];
	$parts4 = explode ('/' , $_POST['todate2']);
	$today2=$parts4[2];
	$tomonth2=$parts4[1];
	$toyear2=$parts4[0];
	$_SESSION['todate2']=$_POST['todate2'];
	$_SESSION['toyear2']=$toyear2;
	
	//date 3
	if( $_POST['fromdate3']=="" ) $_POST['fromdate3']="";
	if( $_POST['todate3']=="" ) $_POST['todate3']="";
	$parts5 = explode ('/' , $_POST['fromdate3']);
	$fromday3=$parts5[2];
	$frommonth3=$parts5[1];
	$fromyear3=$parts5[0];
	$_SESSION['fromdate3']=$_POST['fromdate3'];
	$parts6 = explode ('/' , $_POST['todate3']);
	$today3=$parts6[2];
	$tomonth3=$parts6[1];
	$toyear3=$parts6[0];
	$_SESSION['todate3']=$_POST['todate3'];
	$_SESSION['toyear3']=$toyear3;
		
	$diastaseis=$_POST['diastaseis'];
	if( $diastaseis=="" ) $diastaseis=1;
	$_SESSION['diastaseis']=$diastaseis; 
	
	$fromPred = $_POST['fromPred'];
	$toPred = $_POST['toPred'];
	$fibVer1 = $_POST['fibVer1'];
	$fibHor1 =  $_POST['fibHor1'];
	$fibCircle1 = $_POST['fibCircle1'];
	$fibSide1 = $_POST['fibSide1'];
	$fibVer2 =  $_POST['fibVer2'];
	$fibHor2 =  $_POST['fibHor2'];
	$fibCircle2 =  $_POST['fibCircle2'];
	$fibSide2 = $_POST['fibSide2'];
	$fibVer3 =  $_POST['fibVer3'];
	$fibHor3 =  $_POST['fibHor3'];
	$fibCircle3 =  $_POST['fibCircle3'];
	$fibSide3 = $_POST['fibSide3'];
	$fibVer4 =  $_POST['fibVer4'];
	$fibHor4 =  $_POST['fibHor4'];
	$fibCircle4 =  $_POST['fibCircle4'];
	$fibSide4 = $_POST['fibSide4'];
	if( $fromPred == "" ) $fromPred = "1";
	if( $toPred == "" ) $toPred = "20";
	if( $fibVer1 == "" ) $fibVer1 = "0,1,2,3,5,8";
	if( $fibHor1 == "" ) $fibHor1 = "0,1,2,3,5,8";
	if( $fibSide1 == "" ) $fibSide1 = "0,1,2,3,5,8";
	if( $fibCircle1 == "" ) $fibCircle1 = "0,1,2,3,5,8";
	if( $fibVer2 == "" ) $fibVer2 = "0,1,2,3,5,8";
	if( $fibHor2 == "" ) $fibHor2 = "0,1,2,3,5,8";
	if( $fibSide2 == "" ) $fibSide2 = "0,1,2,3,5,8";
	if( $fibCircle2 == "" ) $fibCircle2 = "0,1,2,3,5,8";
	if( $fibVer3 == "" ) $fibVer3 = "0,1,2,3,5,8";
	if( $fibHor3 == "" ) $fibHor3 = "0,1,2,3,5,8";
	if( $fibSide3 == "" ) $fibSide3 = "0,1,2,3,5,8";
	if( $fibCircle3 == "" ) $fibCircle3 = "0,1,2,3,5,8";
	if( $fibVer4 == "" ) $fibVer4 = "0,1,2,3,5,8";
	if( $fibHor4 == "" ) $fibHor4 = "0,1,2,3,5,8";
	if( $fibSide4 == "" ) $fibSide4 = "0,1,2,3,5,8";
	if( $fibCircle4 == "" ) $fibCircle4 = "0,1,2,3,5,8";
	$_SESSION['fromPred'] = $fromPred;
	$_SESSION['toPred'] = $toPred;
	$_SESSION['fibVer1'] = $fibVer1;
	$_SESSION['fibHor1'] = $fibHor1;
	$_SESSION['fibCircle1'] = $fibCircle1;
	$_SESSION['fibSide1'] = $fibSide1;
	$_SESSION['fibVer2'] = $fibVer2;
	$_SESSION['fibHor2'] = $fibHor2;
	$_SESSION['fibCircle2'] = $fibCircle2;
	$_SESSION['fibSide2'] = $fibSide2;
	$_SESSION['fibVer3'] = $fibVer3;
	$_SESSION['fibHor3'] = $fibHor3;
	$_SESSION['fibCircle3'] = $fibCircle3;
	$_SESSION['fibSide3'] = $fibSide3;
	$_SESSION['fibVer4'] = $fibVer4;
	$_SESSION['fibHor4'] = $fibHor4;
	$_SESSION['fibCircle4'] = $fibCircle4;
	$_SESSION['fibSide4'] = $fibSide4;
	?>
<div id="header">
	<h3>Earthquake Prediction - Greece</h3>
</div>

<div id="container">
<a name="top"></a>
<form name="testform" action="index2.php" method="post" style="border: 0px solid #97AEC4;" >	
		<?php include("menu.php"); ?>
		<br>
	<?php include("menuUtilities.php"); ?>
	<div id="glass_bg_map"> </div>
	<table style="position:relative; z-index:2; left:10px; top: 30px; width:1100px;" cellpadding="0" border="0">
		<tr>
			<td>
				<div id="map" style="position:relative;
					top:-10px;
					height:555px;
					width:1100px;
					margin-right:10px;
					z-index:4;">
				</div>
        
			</td>
		</tr>	
	</table>  

	<div id="latlng">
		Latitude:&nbsp;<input type="text" id="coordslat" value="" size="10" maxlength="10"/>&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Longitude:&nbsp;<input type="text" id="coordslng" value="" size="10" maxlength="10"/>
	</div>

	<div id="latlng2">
		Last&nbsp;earthquake&nbsp;-&nbsp;
		Lat:&nbsp;<input type="text" id="coordslatlast" value="" size="7" maxlength="7"/>&nbsp;&nbsp;&nbsp;
		Long:&nbsp;<input type="text" id="coordslnglast" value="" size="7" maxlength="7"/>
	</div>

	<div id="glass_bg_options">
	<table border="0" align="center" cellspacing="2">
	<tr>
		<td valign="top" height="120">
			<table align="center" bgcolor="#8e8e8e" width="530" height="120" style="border: 2px solid #97AEC4; height:80px;">
				<tr align="center">
					<th>
						1st&nbsp;Period
					</th>
					<td>
						from
						<input style="font-size:13px; font-weight:bold" autocomplete="off" type="text" name="fromdate1" class="tcal" value="<?php echo $_SESSION['fromdate1']; ?>"  id="fromdate1" ondblclick="dat1()" size="10"/>
						to
						<input style="font-size:13px; font-weight:bold" autocomplete="off" type="text" name="todate1" class="tcal" value="<?php echo $_SESSION['todate1']; ?>"  id="todate1" ondblclick="dat2()" size="10"/>
					</td>
				<!--	<td align="center">Display<input id="color" onclick="markerdisp1('1')" type="checkbox" checked></td>
				-->
				</tr>
				<tr align="center">
					<th>
						2nd&nbsp;Period
					</th>
					<td>
						from
						<input style="font-size:13px; font-weight:bold" autocomplete="off" type="text" name="fromdate2" class="tcal" value="<?php echo $_SESSION['fromdate2']; ?>"  id="fromdate2" ondblclick="dat3()" size="10"/>
						to
						<input style="font-size:13px; font-weight:bold" autocomplete="off" type="text" name="todate2" class="tcal" value="<?php echo $_SESSION['todate2']; ?>"  id="todate2" ondblclick="dat4()" size="10"/>
					</td>
				<!--	<td align="center">Display<input id="2" onclick="markerdisp2('2')" type="checkbox" checked></td>
				-->
				</tr>
				<tr align="center">
					<th>
						3nd&nbsp;Period
					</th>
					<td>
						from
						<input style="font-size:13px; font-weight:bold" autocomplete="off" type="text" name="fromdate3" class="tcal" value="<?php echo $_SESSION['fromdate3']; ?>"  id="fromdate3" ondblclick="dat5()" size="10"/>
						to
						<input style="font-size:13px; font-weight:bold" autocomplete="off" type="text" name="todate3" class="tcal" value="<?php echo $_SESSION['todate3']; ?>"  id="todate3" ondblclick="dat6()" size="10"/>
					</td>
			<!--		<td align="center">Display<input id="3" onclick="markerdisp3('3')" type="checkbox" checked></td>
			-->
				</tr>
			</table>
		</td>
		<td valign="top">
			<table id="earth" style="position:relative;">
			<tr>
				<th width="50">Period&nbsp;1</th>
				<td align="center">
					<label for="1"><span></span>< 3 R</label>
					<input id="1" onclick="markerdisp1('1')" type="checkbox" checked></td>
				<td align="center">
					<label for="2"><span></span>3 - 3.9 R</label>
					<input id="2" onclick="markerdisp1('2')" type="checkbox" checked></td>
				<td align="center">
					<label for="3"><span></span>4 - 4.9 R</label>
					<input id="3" onclick="markerdisp1('3')" type="checkbox" checked></td>
				<td align="center">
					<label for="4"><span></span>5 - 5.9 R</label>
					<input id="4" onclick="markerdisp1('4')" type="checkbox" checked></td>
				<td align="center">
					<label for="5"><span></span>>6 R</label>
					<input id="5" onclick="markerdisp1('5')" type="checkbox" checked></td>
			</tr>
			<tr>
				<th>Period&nbsp;2</th>
				<td align="center">
					<label for="6"><span></span>< 3 R</label>
					<input id="6" onclick="markerdisp2('1')" type="checkbox" checked></td>
				<td align="center">
					<label for="7"><span></span>3 - 3.9 R</label>
					<input id="7" onclick="markerdisp2('2')" type="checkbox" checked></td>
				<td align="center">
					<label for="8"><span></span>4 - 4.9 R</label>
					<input id="8" onclick="markerdisp2('3')" type="checkbox" checked></td>
				<td align="center">
					<label for="9"><span></span>5 - 5.9 R</label>
					<input id="9" onclick="markerdisp2('4')" type="checkbox" checked></td>
				<td align="center">
					<label for="10"><span></span>>6 R</label>
					<input id="10" onclick="markerdisp2('5')" type="checkbox" checked></td>
			</tr>
			<tr>
				<th>Period&nbsp;3</th>
				<td align="center">
					<label for="11"><span></span>< 3 R</label>
					<input id="11" onclick="markerdisp3('1')" type="checkbox" checked></td>
				<td align="center">
					<label for="12"><span></span>3 - 3.9 R</label>
					<input id="12" onclick="markerdisp3('2')" type="checkbox" checked></td>
				<td align="center">
					<label for="13"><span></span>4 - 4.9 R</label>
					<input id="13" onclick="markerdisp3('3')" type="checkbox" checked></td>
				<td align="center">
					<label for="14"><span></span>5 - 5.9 R</label>
					<input id="14" onclick="markerdisp3('4')" type="checkbox" checked></td>
				<td align="center">
					<label for="15"><span></span>>6 R</label>
					<input id="15" onclick="markerdisp3('5')" type="checkbox" checked></td>
			</tr>
			</table>
		</td>
	</tr>
	<tr>
	<td valign="top" height="250">
		<table align="center" bgcolor="#8e8e8e" width="530" style="border-top:2px solid #97AEC4; border-right:2px solid #97AEC4; border-left:2px solid #97AEC4;">
			<tr align="center">
				<td>
					<input value="<?php echo $_SESSION['fromlat']; ?>" type="text" name="fromlat" id="fromlat" maxlength="6" size="16" onkeyup="latitude()"/>
				</td>
				<th width="110">
					<=Latitude<=
				</th>
				<td>
					<input value="<?php echo $_SESSION['tolat']; ?>" type="text" name="tolat" id="tolat" maxlength="6" size="16" onkeyup="latitude()"/>
				</td>
			</tr>
		</table>
		<table align="center" bgcolor="#8e8e8e" width="530" style="border-right:2px solid #97AEC4; border-left:2px solid #97AEC4;">
			<tr align="center">
				<td>
					<input value="<?php echo $_SESSION['fromlng']; ?>" type="text" name="fromlng" id="fromlng" maxlength="6" size="16" onkeyup="longitude()"/>
				</td>
				<th width="110">
					<=Longitude<=
				</th>
				<td>
					<input value="<?php echo $_SESSION['tolng']; ?>" type="text" name="tolng" id="tolng" maxlength="6" size="16" onkeyup="longitude()"/>
				</td>
			</tr>
		</table>	
		<table align="center" bgcolor="#8e8e8e" width="530" style="border-right:2px solid #97AEC4; border-left:2px solid #97AEC4;">
			<tr align="center">
				<td>
					<input value="<?php echo $_SESSION['fromdpth']; ?>" type="text" name="fromdpth" id="fromdpth" maxlength="4" size="4" onkeyup="depth()"/>
				</td>
				<th width="110">
					<=Depth<=
				</th>
				<td>
					<input value="<?php echo $_SESSION['todpth']; ?>" type="text" name="todpth" id="todpth" maxlength="4" size="4" onkeyup="depth()"/>
				</td>
			</tr>
		</table>
		<table align="center" bgcolor="#8e8e8e" width="530" style="border-right:2px solid #97AEC4; border-left:2px solid #97AEC4;">
			<tr align="center">
				<td>
					<input value="<?php echo $_SESSION['frommagn']; ?>" type="text" name="frommagn" id="frommagn" maxlength="3" size="3" onkeyup="magnitude()"/>
				</td>
				<th width="110">
					<=Magnitude<=
				</th>
				<td>
					<input value="<?php echo $_SESSION['tomagn']; ?>" type="text" name="tomagn" id="tomagn" maxlength="3" size="3" onkeyup="magnitude()"/>
				</td>
			</tr>
		</table>
		<table align="center" bgcolor="#8e8e8e" width="530" style="border-right:2px solid #97AEC4; border-left:2px solid #97AEC4;">
			<tr align="center">
				<th width="200">
					Grid dimensions
				</th>
				<td width="50">
					<input value="<?php echo $_SESSION['diastaseis']; ?>" type="text" name="diastaseis" id="diastaseis" maxlength="1" size="1" onkeyup = "diastaseisfun()"/>
				</td>
				<td width="50">
					<input value="<?php echo $_SESSION['diastaseis']; ?>" type="text" name="diastaseis2" id="diastaseis2" maxlength="1" size="1" READONLY/>
				</td>
			</tr>
		</table>
		<table align="center" bgcolor="#8e8e8e" width="530" style="border-bottom:2px solid #97AEC4; border-right:2px solid #97AEC4; border-left:2px solid #97AEC4;">
			<tr align="center">
				<th width="200">
					Order by
				</th>
				<td width="170">
					<select name="order" value="<?php echo $_SESSION['order']; ?>">
						<option <?php if($_SESSION['order'] == "date"){ echo 'selected'; } ?> value="date">date</option>
						<option <?php if($_SESSION['order'] == "lng"){ echo 'selected'; } ?> value="lng">lng</option>
						<option <?php if($_SESSION['order'] == "lat"){ echo 'selected'; } ?> value="lat">lat</option>
						<option <?php if($_SESSION['order'] == "megethos"){ echo 'selected'; } ?> value="megethos">magnitude</option>
						<option <?php if($_SESSION['order'] == "vathos"){ echo 'selected'; } ?> value="vathos">depth</option>
					</select>
					<select name="orderby" value="<?php echo $_SESSION['orderby']; ?>">
						<option <?php if($_SESSION['orderby'] == "ASC"){ echo 'selected'; } ?> value="ASC">ascending</option>
						<option <?php if($_SESSION['orderby'] == "DESC"){ echo 'selected'; } ?> value="DESC">descending</option>
					</select>
				</td>
			</tr>
		</table>
		<table align="center">
			<tr>
				<td>
					<div class="buttons">
						<button type="submit" class="positive" onclick="check()">
							<img src="images/tick.png" alt=""/> 
							Search
						</button>
					</div>
				</td>
		</form>
				<form action="" method="post" align="center">	
					<td>
						<div class="buttons">
							<button type="submit" class="s" name="subclear">
						<!		<img src="images/tick.png" alt=""/> 
								Clear
							</button>
						</div>
					</td>
				</form>	
			</tr>
		</table>
	</td>

	<td>
		<table align="center"  bgcolor="#8e8e8e" width="450" style="border: 2px solid #97AEC4;">
			<tr>
				<td width="300">
					<img src="images/black.png" alt="some_text" width="20">&nbsp;&nbsp;&nbsp; 1 >= Magnitude < 3
				</td>
			</tr>
			<tr>
				<td>
					<img src="images/blue.png" alt="some_text" width="20">&nbsp;&nbsp;&nbsp; 3 >= Magnitude < 4
				</td>
			</tr>
			<tr>
				<td>
					<img src="images/green.png" alt="some_text" width="20">&nbsp;&nbsp;&nbsp; 4 >= Magnitude < 5
				</td>
			</tr>
			<tr>
				<td>
					<img src="images/red.png" alt="some_text" width="20">&nbsp;&nbsp;&nbsp; 5 >= Magnitude < 6
				</td>
			</tr>
			<tr>
				<td>
					<img src="images/yellow.png" alt="some_text" width="20">&nbsp;&nbsp;&nbsp; 6 >= Magnitude
				</td>
			</tr>
			<tr>
				<td>
					<img src="images/pink.png" alt="some_text" width="20">&nbsp;&nbsp;&nbsp; predictions
				</td>
			</tr>
			<tr>
				<td>
					<table align="center"  bgcolor="#8e8e8e" width="440" style="border: 2px solid #97AEC4;">
					<tr>
						<td>
						<form action="index2.php" method="post"
							enctype="multipart/form-data">
							<label for="file">*.csv file:</label>
							<input type="file" name="file" id="file"><br>
							<input type="submit" name="insertcsv" value="Insert">
						</form>
						</td>
					</tr>
					</table>
				</td>
			</tr>
		</table>
	</td>	
	</tr>
	</table>

</div>
</div>
</div>
<br>
<?php
	if( isset( $_POST['subclear']) ) {
		unset($_SESSION['fromPred']);
		unset($_SESSION['toPred']);

		unset($_SESSION['todate1']);
		unset($_SESSION['todate2']);
		unset($_SESSION['todate3']);
		unset($_SESSION['fromdate1']);
		unset($_SESSION['fromdate2']);
		unset($_SESSION['fromdate3']);
		unset($_SESSION['tomagn']);
		unset($_SESSION['frommagn']);
		unset($_SESSION['order']);
		unset($_SESSION['orderby']);
		unset($_SESSION['tolat']);
		unset($_SESSION['tolng']);
		unset($_SESSION['fromlat']);
		unset($_SESSION['fromlng']);
		unset($_SESSION['todpth']);
		unset($_SESSION['fromdpth']);

		unset($_SESSION['fibVer1']);
		unset($_SESSION['fibHor1']);
		unset($_SESSION['fibCircle1']);
		unset($_SESSION['fibSide1']);
		unset($_SESSION['fibVer2'] );
		unset($_SESSION['fibHor2'] );
		unset($_SESSION['fibCircle2'] );
		unset($_SESSION['fibSide2']);
		unset($_SESSION['fibVer3']);
		unset($_SESSION['fibHor3'] );
		unset($_SESSION['fibCircle3'] );
		unset($_SESSION['fibSide3']);
		unset($_SESSION['fibVer4'] );
		unset($_SESSION['fibHor4']);
		unset($_SESSION['fibCircle4'] );
		unset($_SESSION['fibSide4']);
	}
	$fromdate1=$fromday1.$frommonth1.$fromyear1."000000";
	$todate1=$today1.$tomonth1.$toyear1."245959";
	$fromdate2=$fromday2.$frommonth2.$fromyear2."000000";
	$todate2=$today2.$tomonth2.$toyear2."245959";
	$fromdate3=$fromday3.$frommonth3.$fromyear3."000000";
	$todate3=$today3.$tomonth3.$toyear3."245959";
	include("agent.php");
?>
<table align="center" width="1120" border="0">
	<tr>
		<td>
		<?php include('createsql.php'); ?>
		</td>
	</tr>
</table>

<div id="foot">
	Copyright &copy; 2013 - Thanos Keskempes, Anthony C Boucouvalas, Nikos Tselikas
</div>
</body>

</html>
<?php
	if( isset( $_POST['insertcsv']) ) {
		move_uploaded_file($_FILES["file"]["tmp_name"],"pred.csv");
	}
?>
