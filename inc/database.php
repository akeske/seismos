<?php

/**
 * Connect to the mysql database.
*/
error_reporting(E_ALL ^ E_DEPRECATED);
if (!isset($_CONFIG))
    require 'config.php';

$con=mysql_connect ($CFG_SERVER, $CFG_USER, $CFG_PASSWORD)
or die ('Συγγνώμη αλλά δεν μπορούμε να συνδεθούμε στην βάση δεδομένων. Παρακαλώ ελένξτε το αρχειο CONFIG.PHP!!!');
global $con;
/* connect to database */
mysql_select_db ($CFG_DATABASE);
?>
