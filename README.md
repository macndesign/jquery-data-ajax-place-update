# jquery-data-ajax-place-update

Data update in place with jQuery only configuration html5 data attribute.

## Installation

Include script *after* the jQuery library:

    <script src="/path/to/jquery-data-ajax-place-update.js"></script>

## Usage

Configure attributes in the link tag:

    <a data-ajax='{"update": "#mysrc", "place": "#content"}' href="/test/">Test</a>
    <div id="mysrc"></div>

#### Attributes legend:

- update: HTML element to be inserted content.
- place: Piece you want to capture of the link.

## Define the resources in HTML page, inside of a <script> tag:

    var $resources = {
        'load_image': '<img class="loader" src="/path/to/img/loader.gif" alt="Loading...">',
        'urlerror': '/error/',
        'url404': '/error-404/',
        'url500': '/error-500/'
    }

## Authors

- [Mário Chaves](https://github.com/macndesign)
- [Daniel Cardoso](https://github.com/dcardosods)
- [Ruan Carlos](https://github.com/ruanltbg)

## Extra

A basic [django](https://www.djangoproject.com/) project [myajax](https://github.com/macndesign/jquery-data-ajax-place-update/tree/master/myajax) with the jQuery script integrated.

Enjoy!
