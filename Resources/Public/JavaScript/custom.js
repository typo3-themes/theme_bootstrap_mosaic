var jQuery = $;


/* ===== Sticky Navbar ===== */

jQuery(window).load(function(){
 jQuery(".navbar").sticky({ topSpacing: 0 });
});

/* ====== Search box toggle ===== */
jQuery(window).load(function() {
    jQuery('#nav-search').on('click', function() {
        jQuery(this).toggleClass('show hidden').removeClass('animated flipInX');
        jQuery("#nav-search-close").toggleClass('show hidden');
        jQuery("#nav-search-form").toggleClass('show hidden animated flipInX');
        return false;
    });

    jQuery('#nav-search-close').on('click', function() {
        jQuery(this).toggleClass('show hidden');
        jQuery("#nav-search").toggleClass('show hidden animated flipInX');
        jQuery("#nav-search-form").toggleClass('show hidden animated flipInX');
        return false;
    });

    /* Navbar dropdown link bug fix */

    jQuery('.navbar-nav > li > a').hover (function() {
        jQuery(this).toggleClass("nav-hover-fix");
        return false;
    });
})


// Style Toggle
// ============

jQuery('.style-toggle-btn').on('click', function() {
    jQuery(".style-toggle").toggleClass("style-toggle-show");
    jQuery(this).toggleClass("fa-gears fa-angle-double-right");
    return false;
});

// Navbar Style Change
// =================

jQuery('#opt-navbar-dark').on('change', function() {
    jQuery(".mini-navbar").addClass("mini-navbar-dark").removeClass("mini-navbar-white");
    jQuery(".navbar").addClass("navbar-dark").removeClass("navbar-white");
    return false;
});

jQuery('#opt-navbar-white').on('change', function() {
    jQuery(".mini-navbar").addClass("mini-navbar-white").removeClass("mini-navbar-dark");
    jQuery(".navbar").addClass("navbar-white").removeClass("navbar-dark");
    return false;
});

jQuery('#opt-navbar-mixed').on('change', function() {
    jQuery(".mini-navbar").addClass("mini-navbar-dark").removeClass("mini-navbar-white");
    jQuery(".navbar").addClass("navbar-white").removeClass("navbar-dark");
    return false;
});

// Footer Style Change
// =================

jQuery('#opt-footer-dark').on('change', function() {
    jQuery("footer").addClass("footer-dark").removeClass("footer-white");
    return false;
});

jQuery('#opt-footer-white').on('change', function() {
    jQuery("footer").addClass("footer-white").removeClass("footer-dark");
    return false;
});

// Body Style Change
// =================

jQuery('.style-toggle-body .colors > .green').on('click', function() {
    jQuery("body").addClass("body-green").removeClass("body-blue body-orange body-red");
    return false;
});

jQuery('.style-toggle-body .colors > .blue').on('click', function() {
  jQuery("body").addClass("body-blue").removeClass("body-green body-orange body-red");
  return false;
});

jQuery('.style-toggle-body .colors > .orange').on('click', function() {
  jQuery("body").addClass("body-orange").removeClass("body-green body-blue body-red");
  return false;
});

jQuery('.style-toggle-body .colors > .red').on('click', function() {
  jQuery("body").addClass("body-red").removeClass("body-green body-blue body-orange");
  return false;
});

/* ===== Our Services ===== */

jQuery('i').hover (function() {
  jQuery(this).toggleClass("fa-rotate-90");
  return false;
});

/* ===== Sign Up popovers ===== */

jQuery(function(){
  jQuery('#name').popover();
});

jQuery(function(){
  jQuery('#username').popover();
});

jQuery(function(){
  jQuery('#email').popover();
});

jQuery(function(){
  jQuery('#password').popover();
});

jQuery(function(){
  jQuery('#repeat-password').popover();
});

// Smooth scrolling for UI elements page
// =====================================
jQuery(document).ready(function(){
  jQuery('a[href*=#buttons],a[href*=#panels], a[href*=#info-boards], a[href*=#navs], a[href*=#headlines]').bind("click", function(e){
    var anchor = jQuery(this);
    jQuery('html, body').stop().animate({
    scrollTop: jQuery(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
   return false;
});