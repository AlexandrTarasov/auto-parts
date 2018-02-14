<?php
//header("Content-Type: text/html; charset=utf-8");
define('VERSION', '1.5.3.1');
require_once('../admin/config.php');

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);

// VQMODDED Startup
// Startup
require_once(DIR_SYSTEM . 'startup.php');

// Application Classes
require_once(DIR_SYSTEM . 'library/currency.php');
require_once(DIR_SYSTEM . 'library/user.php');
require_once(DIR_SYSTEM . 'library/weight.php');
require_once(DIR_SYSTEM . 'library/length.php');

// Registry
$registry = new Registry();

// Loader
$loader = new Loader($registry);
$registry->set('load', $loader);

// Config
$config = new Config();
$registry->set('config', $config);

// Database
$db = new DB(DB_DRIVER, DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
$registry->set('db', $db);

$start   = microtime(true);
$crosses = array();
$suplier = '';
$pord_id = '';
$suplier_table ='';


if (time_nanosleep(3, 1000)) {
	if(isset($_GET['prod'])) {
	  $crosses = explode(',', $_GET['prod']);
	 
		foreach ($crosses as $key => $pord_id) {

			$suplier=substr($pord_id,0,3);
			if ($suplier == 'el-') { $suplier_table='ap_prod_elit';}
			if ($suplier == 'pu-') { $suplier_table='ap_poliurit';}
			$pord_id = substr($pord_id, 3);

			if ($suplier != 'mp-'){ /*main products table*/
				
				$q_anal_price = $db->query("SELECT DISTINCT p.price_uah AS price, p.brend  AS sku FROM
			`".$suplier_table."` p where id='".$pord_id."'");
			}else{
				$q_anal_price = $db->query("SELECT DISTINCT `price`,`sku`  from `product` where product_id='".$pord_id."'");
			}//$analog_price=rtrim($analog_price,".00");

				$analog_price = $q_anal_price->row['price'];
				$analog_manuf = $q_anal_price->row['sku'];
				$analog_price = $analog_price*1.1;
				$analog_price = round($analog_price);
				echo("<div style=\"display: inline-block;\">".$analog_manuf." :</div> <div class=blue>≈ ".$analog_price." грн</div> <div class=\"clearfix\"></div>");
		}	
		

	}

}

?>
