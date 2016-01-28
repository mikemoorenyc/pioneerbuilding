<section id="top-section" data-section-anchor="<?php echo $homeURL;?>/">

  <header>
    <h1 class="logo">
      <a href="<?php echo $homeURL;?>/">
      <div class="mobile-logo dt-hide">
        <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile-logo"></use>
        </svg>
      </div>
      <span class="dt-hide text">Pioneer Building</span>
    </a>
    </h1>

    <?php include 'navSection.php';?>

    <a alt="Open" href="menu" class="menu-toggle dt-hide">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu10"></use>
      </svg>
    </a>

  </header>

  <div id="hero-image">
    <?php
    $home = get_page_by_title("Home");

    $hero = get_post_meta( $home->ID, 'hero-image', true );
$hero = $hero[0];
$dtSrc = wp_get_attachment_image_src($hero['desktop-version'], 'fake-full', false);
$dtSrc = $dtSrc[0];
$mobSrc = wp_get_attachment_image_src($hero['mobile-version'], 'large', false);
$mobSrc = $mobSrc[0];



    ?>

   <img class="hero lazy-load" data-dt="<?php echo $dtSrc;?>" data-mob="<?php echo $mobSrc;?>"/>

   <div class="headline-copy">
     <h1>
       THE MOST<br/> ACCESIBLE<br/> BUILDING IN<br/> <strong>BROOKLYN</strong>
       <div class="sub">
         Transit Access<br/>
         Within 3 min walk
       </div>
     </h1>

   </div>

  </div>




</section>
