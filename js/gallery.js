// build time:Tue Aug 21 2018 14:52:03 GMT+0800 (China Standard Time)
(function(t){t(".entry").each(function(a){t(this).find("img").each(function(){if(!t(this).hasClass("nofancybox")){var i=this.alt;if(i){t(this).after('<span class="caption">'+i+"</span>")}t(this).wrap('<a href="'+this.src+'" title="'+i+'" class="fancybox" rel="gallery'+a+'" />')}})});var a=function(t,a,i){var n=t.width();a.imagesLoaded(function(){var a=this[0],e=a.naturalWidth,c=a.naturalHeight;i();this.animate({opacity:1},500);t.animate({height:n*c/e},500)})};t(".gallery").each(function(){var i=t(this),n=0,e=i.children(".photoset").children(),c=e.length,r=true;a(i,e.eq(0),function(){r=false});i.on("click",".prev",function(){if(!r){var t=(n-1)%c;r=true;a(i,e.eq(t),function(){e.eq(n).animate({opacity:0},500);r=false;n=t})}}).on("click",".next",function(){if(!r){var t=(n+1)%c;r=true;a(i,e.eq(t),function(){e.eq(n).animate({opacity:0},500);r=false;n=t})}})})})(jQuery);
//rebuild by neat 