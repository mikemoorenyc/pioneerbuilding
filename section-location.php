<section id="location" data-section-anchor="<?php echo $homeURL;?>/location/">
  <div class="top-copy">
    <div class="inner">
  <?php
  $location = get_page_by_title('Location');
  $content = $stats = get_post_meta( $location->ID, 'location-content', true );
  $content = $content[0];
  ?>
    <div class="left-wrap">
    <div class="heading left-side">
      <?php echo $content['main-heading'];?>

    </div>
    </div>
    <div class="right-wrap">
    <div class="content right-side">
      <?php echo $content['main-content'];?>
    </div>
    </div>
  </div>
  </div>

  <div class="map">
    <?php
    $dtSrc = wp_get_attachment_image_src($content['map-desktop'], 'fake-full', false);
    $dtSrc = $dtSrc[0];
    $mobSrc = wp_get_attachment_image_src($content['map-mobile'], 'large', false);
    $mobSrc = $mobSrc[0];
    ?>
    <img data-dt="<?php echo $dtSrc;?>" data-mob="<?php echo $mobSrc;?>" class="lazy-load" alt="Locations Map"/>
  </div>

  <ul id="location-gallery" class="clearfix no-style">
    <?php
    $locgal = get_post_meta( $location->ID, 'location-gallery', true );
    foreach($locgal as $lg) {
      $imgFull = wp_get_attachment_image_src($lg['image'], 'fake-full', false);
      $imgFull = $imgFull[0];
      $imgOverlay = wp_get_attachment_image_src($lg['image'], 'large', false);
      $imgOverlay = $imgOverlay[0];
      ?>
      <li>
        <a class="modal-single" href="<?php echo $imgFull;?>">
          <span class="inner">
            <img class="lazy-load" data-dt="<?php echo $imgOverlay;?>" data-mob="<?php echo $imgOverlay;?>" />

          </span>
          <span class="copy">
            <?php echo $lg['title'];?>
          </span>
          <?php
          if($lg['caption'] != '') {
            ?>
            <span class="caption hide">
              <?php echo $lg['caption'];?>
            </span>
            <?php
          }

          ?>

        </a>


      </li>
      <?php
    }
    ?>


  </ul>


</section>
