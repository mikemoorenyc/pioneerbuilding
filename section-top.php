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

   <div class="headline-dt-copy mob-hide">
     <h1>
       THE MOST<br/> ACCESSIBLE<br/> BUILDING IN<br/> <strong>BROOKLYN</strong>
       <div class="walk">
         Transit Access<br/>
         Within 3 min walk
       </div>
       <div class="subways clearfix">

         <?php
         $subways = array(
           array('Atlantic Ave-Barclays Ctr', 'tran-atlantic.png'),
           array('Nevins St', 'trans-nevins.png'),
           array('Lafayette Av', 'trans-layfayette.png'),
           array('Hoyt-Schermerhorn St', 'trans-hoyt.png'),
           array('Fulton St', 'trans-fulton.png'),
           array('Atlantic Terminal', 'trans-mta.png'),
         );
         foreach($subways as $s) {
           ?>
           <div class="item">
             <?php echo $s[0];?>
             <img src="<?php echo $siteDir;?>/assets/imgs/<?php echo $s[1];?>" />
           </div>

           <?php
         }

         ?>


       </div>
     </h1>


   </div>

   <div class="headline-mobile-copy dt-hide">
     <h1>
       THE MOST<br/> ACCESSIBLE<br/> BUILDING IN<br/> <strong>BROOKLYN</strong>
       <div class="sub">
         Transit Access<br/>
         Within 3 min walk
       </div>
     </h1>

   </div>



  </div>




</section>
