<section id="contact" data-section-anchor="<?php echo $homeURL;?>/contact/" class="clearfix scroll-magic generalFader" data-scrollfunction="generalFader" data-scrollvariables="theObject">
<?php
$contact = get_page_by_title('Contact');

?>
<div class="main-content">
  <div class="heading">
    <?php echo wpautop($contact->post_content);?>
  </div>
  <ul id="contact-list" class="no-style clearfix">
    <?php
    $list = get_post_meta( $contact->ID, 'contact-list', true );
    foreach($list as $l) {
      ?>
      <li class="fade-kid">
        <h3><span><?php echo $l['name'];?><span></h3>
        <a href="mailto:<?php echo $l['email'];?>"><?php echo $l['email'];?></a>
        <?php
        if($l['phone']!= '') {
          ?>
          <div class="phone"><?php echo $l['phone'];?></div>
          <?php
        }

        ?>

      </li>
      <?php
    }
    ?>

  </ul>

  <div class="ownership">
    <h1>Ownership</h1>

    <a href="http://www.quinlandev.com" target="_blank">www.quinlandev.com</a> &nbsp;&nbsp; <a href="http://www.bltoffice.com" target="_blank">www.bltoffice.com</a>


  </div>

</div>

<ul class="bottom-logos no-style">
  <li class="cushman">
    <img class="lazy-load" data-mob="<?php echo $siteDir;?>/assets/imgs/logo-cush-big.png"data-dt="<?php echo $siteDir;?>/assets/imgs/logo-cush-big.png" alt="Cushman &amp; Wakefield" />

  </li>
  <li class="quinlan">
    <img class="lazy-load" data-mob="<?php echo $siteDir;?>/assets/imgs/logo-quin-large.png"data-dt="<?php echo $siteDir;?>/assets/imgs/logo-quin-large.png" alt="Quinlan" />

  </li>
  <li class="blt">
    <img class="lazy-load" data-mob="<?php echo $siteDir;?>/assets/imgs/logo-blt-large.png"data-dt="<?php echo $siteDir;?>/assets/imgs/logo-blt-large.png" alt="BLT" />

  </li>


</ul>

</section>
