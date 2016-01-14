<?php
/**
 * Template Name: Base Template Page
 */
?>


<?php include 'header.php'; ?>

<?php

$sectionArray = array(
  'top',
  'building',
  'availabilities',
  'location',
  'future',
  'contact'
);
foreach($sectionArray as $sa) {

  include 'section-'.$sa.'.php';
}

?>







<?php include 'footer.php'; ?>
