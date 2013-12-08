<script type="text/javascript">
function gettip(txt) {
	document.getElementById('tip').innerHTML=txt;
}
function reset() {
	document.getElementById('tip').innerHTML=" ";
}
</script>
<?php include("inc/login-proc.php"); ?>
<table width="800" border="0" align="center">
	<tr>
		<th>
			<a href="index.php"
			onmouseover="gettip('Home page with google map and utilities')"
			onmouseout="reset()">Map</a>
		</th>
		
		<?php if($logged_in){ ?>
		<th>
			<a href="install.php"
			onmouseover="gettip('Installing the database with earthquakes from 1984 to 2012')"
			onmouseout="reset()">Install earthquakes</a>
		</th>	<?php } ?>
		
		<?php if($logged_in){ ?>
		<th>
			<a href="insertdata.php"
			onmouseover="gettip('Updating the database fro the year 2013, update every 15 days')"
			onmouseout="reset()">Update earthquakes</a>
		</th>	<?php } ?>
		
		<?php if(!$logged_in){ ?>
		<th>
			<a href="login-form.php"
			onmouseover="gettip('Login')"
			onmouseout="reset()">Login</a>
		</th>	<?php } ?>
		
		<?php if(!$logged_in){ ?>
		<th>
			<a href="register-form.php"
			onmouseover="gettip('User registration')"
			onmouseout="reset()">Register</a>
		</th>	<?php } ?>
		
		<?php if($logged_in){ ?>
		<th>
			<a href="logout-form.php"
			onmouseover="gettip('logging out user')"
			onmouseout="reset()">Logout</a>
		</th>	<?php } ?>
		
		<?php if(!$logged_in){ ?>
		<th>
			<a href="installdb.php"
			onmouseover="gettip('Create database tables')"
			onmouseout="reset()">Install database</a>
		</th>	<?php } ?>
	</tr>
</table>
<table width="950" border="0" align="center">
	<tr>
		<td id="tip" align="center"> <td>
	</tr>
</table>