// Isotop Gallery
// ==============


/* Requires isotope.pkgd.min.js & imagesloaded.pkgd.min.js */
var jQuery = $;


// filter items on button click

jQuery(document).ready(function() {
    /**
     * Isotope filtering
     */
// init Isotope
    var $container = jQuery('#isotope-container').imagesLoaded( function() {
        $container.isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });
    });
    jQuery('#filters a').on('click', function() {
        var filterValue = jQuery(this).attr('data-filter');
        $container.isotope({filter: filterValue});
        return false;
    });
});
