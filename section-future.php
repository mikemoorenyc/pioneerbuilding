<section id="future" data-section-anchor="<?php echo $homeURL;?>/future/">
  <?php
  $future = get_page_by_title('Future');
  $content = $stats = get_post_meta( $future->ID, 'future-content', true );
  $content = $content[0];
  ?>
  <div class="top-copy side-by-side scroll-magic generalFader" data-scrollfunction="generalFader" data-scrollvariables="theObject">
  <div class="inner">
  <div class="left-wrap">
    <div class="heading left-side fade-kid">
      <?php echo $content['main-heading'];?>
    </div>
  </div>
  <div class='right-wrap'>
    <div class="content right-side fade-kid">

<?php echo $content['main-copy'];?>
    </div>
  </div>
</div>
  </div>

  <div class="map-section">
    <?php
    $newcontent  = get_post_meta( $future->ID, 'future-map', true );
    $newcontent = $newcontent[0];
    $dtSrc = wp_get_attachment_image_src($newcontent['desktop-image'], 'fake-full', false);
    $dtSrc = $dtSrc[0];
    $mobSrc = wp_get_attachment_image_src($newcontent['mobile-image'], 'large', false);
    $mobSrc = $mobSrc[0];
    ?>
    <img data-dt="<?php echo $dtSrc;?>" data-mob="<?php echo $mobSrc;?>" class="lazy-load" alt="Future Map"/>

    <div class="copy">
      <?php echo $content['list-heading'];?>

      <ul class="future-points no-style">
        <?php
        $points = get_post_meta( $future->ID, 'future-point-list', true );
        foreach($points as $p) {
          ?>
          <li>
            <h3><?php echo $p['heading'];?></h3>
            <h4><?php echo $p['sub-heading'];?></h4>
          </li>
          <?php
        }
        ?>

      </ul>

      <div class="disc">
        <?php echo $content['bottom-info'];?>

      </div>

    </div>

  </div>


</section>
