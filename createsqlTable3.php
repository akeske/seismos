<table align="center" border="0" style="font-size:12px;">
	<tr>
		<td> <?php
			if($_SESSION['fromdate3']=="" || $_SESSION['todate3']=="") {
				echo "From date: <b> / / </b> to date: <b> / / </b>";
			}else{
				echo "From date: <b>".$_SESSION['fromdate3']."</b> to date: <b>".$_SESSION['todate3']."</b>";
			}
			echo "<br>"; ?>
		</td>
	</tr>
	<tr>
		<td> <?php
			echo "From lat: <b>".$flat[$j]."</b> to lat: <b>".$tlat[$j]."</b>";
			echo "<br>"; ?>
		</td>
	</tr>
</table>
<table style="border: 2px solid #97AEC4;">
	<tr>
		<td> <?php
		for($i=0; $i<$diastaseis; $i++) {
		//	include('createsqlGraph1.php');
		//	include('createsqlGraph2.php');
			include('createsqlGraph3.php');	?>
			<table cellpadding="4" cellspacing="4" style="font-size:12px;">
			<tr>
				<td>
					<a name="<?php echo $k2; ?>"><?php echo $k3+1; ?></A>
				</td>
				<td align="left"> <?php
					echo "lng: <b>".$flng[$i]."</b> - <b>".$tlng[$i]."</b>";
					echo "<br>";
					echo "<b>".$total_recordsD3."</b>  earthquakes";
					echo "<br>";
					echo "Calc time <b>".$time3."</b> sec"; unset($time3);
					echo "<br>"; ?>
					<font style="font-size:14px;"> E = </font> <font style="font-size:10px;"> <b id="<?php echo 'energy3'.$k3; ?>">0 J</b> </font>
					<?php echo "<br>"; ?>
					<font style="font-size:14px;"> b = <b id="<?php echo 'b3'.$k3; ?>"></b> </font>
				</td>
				<td align="right" width="50">
					<font style="font-size:12px;">
						<form>
							<?php
							if ( $ua['name']=='Mozilla Firefox' ) { ?>
								<input style="font-size:12px;" type="button" value="Graph 1" onClick="window.open('graphs3/graph.php?k3=<?php echo $k3; ?>','Graph 1',' width=1000,height=700')"/>
								<input style="font-size:12px;" type="button" value="Graph 2" onClick="window.open('graphs3/graphMagn.php?l3=<?php echo $k3; ?>','Graph 2',' width=1000,height=700')"/>
							<?php }else{ ?>
								<a href="graphs3/graph.php?k3=<?php echo $k3; ?>" target="_blank" style="display:block; float:left; height:15px; width:50px; cursor:pointer;"> Graph 1 </a>
								<a href="graphs3/graphMagn.php?l3=<?php echo $k3; ?>" target="_blank" style="display:block; float:left; height:15px; width:50px; cursor:pointer;"> Graph 2 </a>
							<?php } ?>
						</form>
					</font>
				</td>
				<td align="right" width="50">
					<font style="font-size:12px;">
						<form>
							<?php
							if ( $ua['name']=='Mozilla Firefox' ) { ?>
								<input style="font-size:12px;" type="button" value="Graph 3" onClick="window.open('graphs3/graphMagnTwoYears.php?n3=<?php echo $k3; ?>','Graph 3',' width=900,height=600')"/>
							<?php }else{ ?>
								<a href="graphs3/graphMagnTwoYears.php?n3=<?php echo $k3; ?>" target="_blank" style="display:block; float:left; height:15px; width:50px; cursor:pointer;"> Graph 3 </a>
							<?php } ?>
						</form>
					</font>
				</td>
				<td>
					<a href="#top"> <img src="images/hand.png" alt="Go up" width="20">  </a>
				</td>
			</tr>
			</table> <?php
			
			//for xml file
			$k3=$k3+1;
			
			//for xml file
			if($j==0){
				$_SESSION['flngxml'.$i]=$flng[$i];
				$_SESSION['tlngxml'.$i]=$tlng[$i];
			} ?>
			<div style="height:400px; width:375px; overflow:auto;">
			<table id="rounded-corner">
				<tr>
					<th align="center" width="0" bgcolor="#151B54">ID</th>
					<th align="center" width="0" bgcolor="#151B54">Latitude</th>
					<th align="center" width="0" bgcolor="#151B54">Longitude</th>
					<th align="center" width="0" bgcolor="#151B54">Magnitude</th>
					<th align="center" width="0" bgcolor="#151B54">Depth</th>
				<!--	<th align="center" width="0" bgcolor="#151B54">Type</th> -->
					<th align="center" width="0" bgcolor="#151B54">Date</th>
				</tr>
					<?php
					$color=0;
					$count=1;
					while($row = mysql_fetch_array($resultD3)) {
					//	$id = $row['id'];
					//	$name = $row['name'];
					//	$info = $row['info'];
						$lat = $row['lat'];
						$lng = $row['lng'];
						$lat = number_format($lat, 2, '.', '');
						$lng = number_format($lng, 2, '.', '');
						$megethos = $row['megethos'];
						$vathos = $row['vathos'];
						$type = $row['type'];
						$date = $row['date'];
						if ($color==0) {
							$color=1; ?>
				<tr bgcolor="#3090C7"> <?php }else{
							$color=0; ?>
				<tr bgcolor="#1569C7"> <?php } ?>
					<td align="center">
						<?php echo "$count"; ?>
					</td>
					<td align="center">
						<?php echo "$lat"; ?>
					</td>
					<td align="center">
						<?php echo "$lng"; ?>
					</td>
					<td align="center">
						<?php echo "$megethos"; ?>
					</td>
					<td align="center">
						<?php echo "$vathos"; ?>
					</td>
					<!--
					<td align="center">
						<?php echo "$type"; ?>
					</td>
					-->
					<td align="center">
						<?php echo "$date"; ?>
					</td>
				</tr> <?php
				$count=$count+1; }
				mysql_free_result($resultD3); ?>
			</table> </div><?php
		} ?>
		</td>
	</tr>
</table>