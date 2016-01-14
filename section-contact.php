<section id="contact" data-section-anchor="<?php echo $homeURL;?>/contact/" class="clearfix">
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
      <li>
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
    <?php
    $owner = get_post_meta( $contact->ID, 'ownership', true );
    $owner = $owner[0];

    ?>
    <a href="<?php echo $owner['link'];?>" target="_blank"><?php echo $owner['link-copy'];?></a>

  </div>

</div>

<ul class="bottom-logos no-style">
  <?php
  $logos = get_post_meta( $contact->ID, 'bottom-logos', true );
  foreach($logos as $l) {
    $logo = wp_get_attachment_image_src($l['logo'], 'logo-size', false);
    $src = $logo[0];
    $w = $logo[1];
    $h = $logo[2];
    if($l['alt-text']!= '') {
      $alt = $l['alt-text'];
    } else {
      $alt = basename( get_attached_file( $l['logo'] ) );
    }
    ?>
    <li>
      <?php
      if($l['link']!= '') {
        ?>
        <a href="<?php echo $l['link'];?>" target="_blank">
        <?php
      }

      ?>
      <img class="lazy-load" data-dt="<?php echo $src;?>" data-mob="<?php echo $src;?>" data-w="<?php echo $w;?>" data-h="<?php echo $h;?>" alt='<?php echo $alt;?>' />
      <?php
      if($l['link']!= '') {
        echo '</a>';
      }

      ?>
    </li>

    <?php
  }

  ?>

</ul>

</section>
