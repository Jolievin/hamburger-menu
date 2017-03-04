(function($) {

    function createContextMenu(config) {

        var ul = $("<ul></ul>", {
            "id": "contextmenu",
            "class": "contextmenu",
            "css": {
                "display": "none"
            },
            on: {
                click: function(e) {
                    e.stopPropagation();


                }
            }
        });

        $.each(config, function(key, val) {

            var li = $("<li></li>", {
                "class": "contextmenu__item"
            });

            var a = $("<a></a>", {
                "class": "contextmenu__link",
                "text": key,
                "href": val
            });

            li.append(a).appendTo(ul);

        });

        $("body").append(ul);

        return ul;

    }

   $(document).ready(function() {

        var logo = $(".hamburger__logo"),
            ul = null;

        var config = {
            "Menu item 1": "#menu1",
            "Menu item 2": "#menu2",
            "Menu item 3": "#menu3"
        };

        logo.on("contextmenu", function(e) {
  


            e.preventDefault();

            ul = ul || createContextMenu(config);

  ul.slideToggle();

            ul.css({
                display: "",
                top: e.pageY,
                left: e.pageX

            });

           

        });

        $(document).on("click", function(e) {

            ul.css("display", "none")
            
        });

    });

})(jQuery);


















