;(function ( $, window, undefined ) {
    
    // APU: Ajax Place Update
    var pluginName = 'dataAPU',
        document = window.document,
        defaults = {
            loadImage: "<img class="loader" src="../img/loader.gif" alt="Loading...">",
            urlError: "/error/",
            url404: "/404/",
            url500: "/500/"
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
 
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
    
        var $load_image = defaults.load_image;
        var $urlerror = defaults.urlerror;
        var $url404 = defaults.url404;
        var $url500 = defaults.url500;
        
        $('*[data-ajax]').click(function(e) {
            e.preventDefault();
            var $update = $(this).data("ajax").update;
            var $place = $(this).data("ajax").place;
            var $url = $(this).attr("href");
            $($update).html($load_image);
            $($update).load($url + " " + $place, function(response, status, xhr) {
                if (status === "error") {
                    var msg = "Sorry but there was an error: ";
                    console.log(msg + xhr.status + " " + xhr.statusText);
                    if (xhr.status == 404){
                        $($update).load($url404 + " " + $place);
                    } else if (xhr.status == 500) {
                        $($update).load($url500 + " " + $place);
                    } else {
                        $($update).load($urlerror + " " + $place);
                    }
                }
            });
            
            if($url != window.location){
                window.history.pushState({path: $url}, "", $url);
            }
            
            $(window).bind("popstate", function() {
                $($place).load(location.href + " " + $place);
            });
            
        });
        
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

}(jQuery, window));