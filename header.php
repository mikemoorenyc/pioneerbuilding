<?php

//GET POST SLUG
global $post;
$slug = $post->post_name;

//GET POST PARENT
//$parentID = $post->post_parent;
//$parentslug = get_post($parentID)->post_name;

//GET THEME DIRECTORY
global $siteDir;
$siteDir = get_bloginfo('template_url');

//GET HOME URL
global $homeURL;
$homeURL = esc_url( home_url( ) );

//DECLARE THE SITE TITLE, SAVE A DB QUERY
global $siteTitle;
$siteTitle = get_bloginfo('name');

//DECLARE THE PAGE EXCERPT
global $siteDesc;
$siteDesc = get_bloginfo('description');
?>
<!DOCTYPE html>
<html lang="en" data-current="<?php echo $slug;?>" class="slug-<?php echo $slug;?> __site-loading">
<head>

<!-- ABOVE THE FOLD CSS -->

<style>
<?php $inlinecss = file_get_contents($siteDir.'/css/main.css'); dirReplacer($inlinecss);?>
</style>



  <title><?php echo $siteTitle;?></title>


<!-- HERE'S WHERE WE GET THE SITE DESCRIPTION -->

<meta name="description" content="<?php echo $siteDesc;?>" />

<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">


<?php wp_site_icon();?>

<script>
globals = {};
globals.homeURL = '<?php echo $homeURL;?>/';
globals.siteDir = '<?php echo $siteDir;?>';
globals.initialURL = window.location.href ;
globals.initialSection = globals.initialURL.replace(globals.homeURL+'/', '');
globals.currentPosition = '';



</script>
<link rel="canonical" href="<?php echo get_permalink($post);?>">
<!--  STUFF FOR IE8 WILL GET REMOVED ON COMPILATION // REMOVE THIS LINE TO RENDER IT
<!--[if lte IE 8]>
<link rel="stylesheet" href="<?php echo $siteDir;?>/css/expanded.css" />
	<link href='<?php echo $siteDir;?>/css/ie-fixes.css?ts=<?php echo time();?>' rel='stylesheet' type='text/css'>
  	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->



<!-- FACEBOOK TAGS REMOVED ON COMPILATION UNLESS YOU UNCOMMENT-->

<meta property="og:site_name" content="The Pioneer Building" />
<meta property="og:title" content="<?php echo $siteTitle;?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $homeURL;?>" />
<meta property="og:image" content="<?php echo $siteDir;?>/assets/imgs/fb-share.jpg" />
<meta property="og:description" content="RESIDING IN VIBRANT DOWNTOWN BROOKLYN &amp; AT THE INTERSECTION OF THE BAM CULTURAL DISTRICT, FORT GREENE AND BOERUM HILL, THE PIONEER BUILDING IS LOCATED AT THE MOST COMPREHENSIVE TRANSPORTATION POINT IN NEW YORK CITY." />
<meta name="twitter:title"       content="<?php echo $siteTitle;?> ">
 <meta name="twitter:url"         content="<?php echo $homeURL;?>">
 <meta name="twitter:image"   content="<?php echo $siteDir;?>/assets/imgs/fb-share.jpg">
 <meta name="twitter:card"        content="summary_large_image">
 <meta name="twitter:description" content="RESIDING IN VIBRANT DOWNTOWN BROOKLYN &amp; AT THE INTERSECTION OF THE BAM CULTURAL DISTRICT, FORT GREENE AND BOERUM HILL, THE PIONEER BUILDING IS LOCATED AT THE MOST COMPREHENSIVE TRANSPORTATION POINT IN NEW YORK CITY.">


<meta name="geo.region" content="US-NY" />
<meta name="geo.position" content="40.687623;-73.979387" />
<meta name="ICBM" content="40.687623, -73.979387" />

<noscript>
<style>
#pre-loader {
  display: none !important;
  pointer-events: none;
  width: 0px;
  height: 0px;
}
</style>
</noscript>

</head>
<div id="css-checker"></div>
<body id="top">

<div id="pre-loader">
<img src="<?php echo $siteDir;?>/assets/imgs/logo.svg"  />

</div>



<!--
  <div class="hide">
<?php include 'assets/svgs.svg'; ?>
  </div>-->
<div id="main-container" class="aspecter" data-basewidth="1200">
  <div class="nav-spacer"></div>
