<nav>
  <ul class="no-style nav-list clearfix">
<?php
$navArray = array(
  array('building', 'building96'),
  array("availabilities", 'layer11'),
  array('location','pin71'),
  array("future",'clock125'),
  array("contact",'at5')
);

foreach($navArray as $n) {
  ?>
<li class="<?php echo $n[0];?>">

<a href="<?php echo $homeURL;?>/<?php echo $n[0];?>/">

  <span class="copy"><?php echo $n[0];?></span>
</a>

</li>

  <?php
}


?>



  </ul>

  <a href="close" class="menu-toggle dt-hide">
    <svg>
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#geometry64"></use>
    </svg>
  </a>
</nav>
