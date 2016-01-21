<section id="building" data-section-anchor="<?php echo $homeURL;?>/building/">
<?php
$building=get_page_by_title('Building');

?>
<div class="top-section side-by-side scroll-magic generalFader" data-scrollfunction="generalFader" data-scrollvariables="theObject">
  <div class="inner">
  <div class="header-1">
  <div class="left-side fade-kid">
    <?php echo wpautop($building->post_content);?>
  </div>

  </div>
<div class="right-wrap">
  <div class="info right-side">
    <?php
    $stats = get_post_meta( $building->ID, 'building-stats', true );
    if(count($stats) > 0) {
      ?>
      <ul class="stat-list ">
        <?php
        foreach($stats as $s) {
          ?>
          <li class="fade-kid">  <?php tagStripper($s['text'], array('p'));?> </li>

          <?php
        }

        ?>

      </ul>
      <?php
    }


    ?>


  </div>
</div>
  </div>

</div>



  <?php
  $gal = get_post_meta( $building->ID, 'building-gallery', true );
    if(count($gal) > 0) {
      ?>
<div class="gallery">
  <?php
  $looper = 0;
  foreach($gal as $g) {
    ?>
    <div class="slide" data-count="<?php echo $looper;?>">
      <?php
      $dtSrc = wp_get_attachment_image_src($g['image'], 'fake-full', false);
      $dtSrc = $dtSrc[0];
      $mobSrc = wp_get_attachment_image_src($g['image'], 'large', false);
      $mobSrc = $mobSrc[0];

      ?>
      <img class="slide-img lazy-load" data-dt="<?php echo $dtSrc;?>" data-mob="<?php echo $mobSrc;?>" alt="Slide Image Number <?php echo $looper+1;?>"/>
      <?php
      if($g['caption'] != '') {
        ?>
        <div class="caption"><?php echo $g['caption'];?></div>
        <?php
      }

      ?>


    </div>

    <?php
    $looper++;
  }

  ?>


</div>

      <?php
    }
  ?>
<div class="bottom-section side-by-side scroll-magic generalFader" data-scrollfunction="generalFader" data-scrollvariables="theObject">
<div class="inner">
  <?php
  $extra= get_post_meta( $building->ID, 'building-extra-info', true );
  $extra = $extra[0];
  ?>
  <div class="left-wrap">
  <div class="white-heading left-side fade-kid">
    <?php echo $extra['heading'];?>

  </div>
  </div>
  <div class="extra-main">
    <div class="inner right-side">
      <div class="sub fade-kid">
        <?php echo $extra['sub-heading'];?>
      </div>
      <div class="list">
<?php echo $extra['point-list'];?>

      </div>

    </div>

  </div>
</div>
</div>


</section>
