$(function() {
    var $load_image = $resources.load_image;
    var $urlerror = $resources.urlerror;
    var $url404 = $resources.url404;
    var $url500 = $resources.url500;

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
    
});