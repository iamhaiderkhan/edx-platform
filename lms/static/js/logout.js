/**
 * JS for the logout page.
 *
 * This script waits for all iframes on the page to load before redirecting the user
 * to a specified URL. If there are no iframes on the page, the user is immediately redirected.
 */
(function($) {
    'use strict';

    $(function() {
        var $iframeContainer = $('#iframeContainer'),
            $iframes = $iframeContainer.find('iframe'),
            redirectUrl = $iframeContainer.data('redirect-url');
        var isSamlRequired = document.getElementsByClassName("saml")[0] ? true : false

        if ($iframes.length === 0 && !isSamlRequired) {
            window.location = redirectUrl;
        }

        $iframes.allLoaded(function() {
           if(!isSamlRequired) {
            window.location = redirectUrl;
         }
        });
    });
}(jQuery));
