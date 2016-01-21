<section id="availabilities" data-section-anchor="<?php echo $homeURL;?>/availabilities/">
<?php
$avail = get_page_by_title('Availabilities');
?>
  <div class="keys">
    <div class="deck">
      <span class="copy header-styling">
        Roof Deck
      </span>
      <span class="pointer">
      </span>
    </div>
    <div class="retail">
      <span class="copy header-styling">
        Retail &amp; Mezzanine
      </span>
      <span class="pointer">
      </span>
    </div>

  </div>
  <h1 class="scroll-magic">
    <span class="number">10</span>
    <span class="words">
      <span>
        <strong>Stories</strong>
      </span>
      <span>
        To Tell
      </span>
    </span>

  </h1>
  <div class="dt-highlights mob-hide">
    <?php
    for($i = 10; $i >1; $i--) {
      ?>
      <div class="overlay fl-<?php echo $i;?>" data-fl="<?php echo $i;?>"></div>
      <?php
    }

    ?>
  </div>
  <div class="building-layout">
    <img class="mob-building lazy-load dt-hide" data-dt="<?php echo $siteDir;?>/assets/imgs/building-mobile-stack.png" data-mob="<?php echo $siteDir;?>/assets/imgs/building-mobile-stack.png" />

  </div>
  <div class="mob-silos dt-hide clearfix">
    <ul class="left no-style">

    </ul>
    <ul class="right no-style">

    </ul>
  </div>
  <ul class="avail-list no-style mob-hide">
    <?php
    $listings = get_post_meta( $avail->ID, 'listings', true );
    for($i = 10; $i > 0; $i--) {
      if($i == 1) {
        $name = "Retail & Mezzanine";
      } else {
        $name = $i;
      }
      $status = 'disabled';
      $content = array();
      foreach($listings as $l) {
        if(intval($l['fl']) == $i && $l['hidden'] !='hidden') {
          $status = 'enabled';
          $content['rsf'] = $l['rsf'];
          if($l['floor-plan']!= '') {
            $content['fp'] = $l['floor-plan'];
          } else {
            $content['fp'] = '';
          }
        }
      }
      ?>

      <li class="listing fl-<?php echo $i;?> <?php echo $status;?> clearfix" data-fl="<?php echo $i;?>">
        <?php
        if($status == 'enabled') {
          if($content['fp']!= '') {
            $dtSrc = wp_get_attachment_image_src($content['fp'], 'fake-full', false);
            $dtSrc = $dtSrc[0];
            ?>

              <a href="<?php echo $dtSrc;?>" data-special="fp" class="modal-single clearfix">

            <?php
          }
          ?>
          <span class="num header-styling"><?php echo $name;?></span>
          <span class="rsf"><?php echo $content['rsf'];?> RSF</span>
          <span class="pointer"></span>
          <?php
          if($content['fp']!= '') {
            ?>
            <span class="view header-styling">
              View
            </span></a>
            <?php
          }

          ?>

          <?php
        }

        ?>
      </li>
      <?php
    }
    ?>

  </ul>

<div class="bottom-section clearfix">
    <?php
    $fits = get_post_meta( $avail->ID, 'test-fit-gallery', true );
    $typeArray = array();
    if(count($fits) > 0) {

      ?>
      <div class="test-fits">
        <?php
        foreach($fits as $f) {
          if(in_array($f['type'], $typeArray) == false) {
            array_push($typeArray,$f['type']);
          }
        }
        if(count($typeArray) > 3) {
          $aCount = 'multi';

        } else {
          $aCount = count($typeArray);
        }
        ?>
        <ul class="tf-list no-style count-<?php echo $aCount;?>">

          <?php
          foreach($typeArray as $ta) {
            ?>
            <li>
              <a class="modal-gal header-styling" data-galtype="fit" data-start="0" data-type="<?php echo $ta;?>" href="<?php echo $homeURL;?>/testfits/<?php echo str_replace(" ","",$ta);?>"><?php echo $ta;?></a>
            </li>
            <?php
          }

          ?>

        </ul>

        <div class="fit-gals hide galleries" data-galtype="fit">
          <?php
          foreach($typeArray as $ta) {
            ?>
            <div class="gal" data-type="<?php echo $ta;?>">
              <?php
              foreach($fits as $f) {
                $count = 0;
                if($f['type'] == $ta) {
                  ?>
                  <div class="slide" data-count="<?php echo $count;?>">
                    <?Php
                    $dtSrc = wp_get_attachment_image_src($f['image'], 'fake-full', false);
                    $dtSrc = $dtSrc[0];
                    ?>
                    <img  data-src="<?php echo $dtSrc;?>" alt="<?php echo $ta;?>"/>
                    <?php
                    if($f['caption']!='') {
                      ?>
                      <div class="caption"><?php echo $f['caption'];?></div>
                      <?php
                    }
                    ?>
                  </div>
                  <?php
                  $count++;
                }
              }

              ?>

            </div>
            <?php

          }


          ?>

        </div>

      </div>
      <?php
    }
    ?>
    <?php
    //DOWNLOADS
    $dl = get_post_meta( $avail->ID, 'downloads', true );
    if(count($dl)>0) {
      ?>
      <ul class="downloads no-style clearfix">
        <?php
        foreach($dl as $d) {
          $link = wp_get_attachment_url( $d['document'], 'full' );
          ?>
          <li>
            <a href="<?php echo $link;?>" target="_blank" class="header-styling">
              <?php echo $d['link-copy'];?>
            </a>


          </li>
          <?php
        }

        ?>

      </ul>

      <?php
    }


    ?>




</div>

</section>
