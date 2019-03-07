// build time:Thu Mar 07 2019 11:39:15 GMT+0800 (China Standard Time)
(function(o){var e=1e3;var t=o("#totop");var l=500;t.hide();o(window).scroll(function(){var l=o(document).scrollTop();if(l>e){o(t).stop().fadeTo(300,1)}else{o(t).stop().fadeTo(300,0)}});o(t).click(function(){o("html, body").animate({scrollTop:0},l);return false})})(jQuery);
//rebuild by neat 