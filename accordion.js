/**
 * Created by Benyamin Shoham on 9/27/16.
 */

var Accordion = function Accordion( containerId, itemClass, headClass, bodyClass, toggleClass ) {
    var container = jQuery( '#' + containerId );
    var toggles = container.find( '.' + toggleClass );

    // Set state data to all toggle elements
    toggles.data( 'state', 'closed' );
    // Close all items
    container.find('.' + bodyClass).each(function(){
        jQuery(this).slideUp();
    });

    // Bind toggle elements click event
    toggles.click( function( event ) {
        var item = {};
        if ( jQuery(this).data('state') === 'closed' ) {
            // Before opening an item close all items.
            container.find('.' + bodyClass).each(function(){
                jQuery(this).slideUp();
            });
            // Find clicked item and open it's body
            item = jQuery(this.closest( '.' + itemClass ));
            item.find( '.' + bodyClass ).slideDown();
            jQuery(this).data( 'state', 'opened' );
        } else {
            // Find clicked item and close it's body
            item = jQuery(this.closest( '.' + itemClass ));
            item.find( '.' + bodyClass ).slideUp();
            jQuery(this).data( 'state', 'closed' );
        }
    });
};