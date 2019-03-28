
// Add custom css parser to disable style scoping when type="text/unscoped" is defined
// @see https://riot.js.org/api/compiler/#-riotparserscss-tagname-css
riot.parsers.css.unscoped = function(tag, css) {
    // inject css manually
    css && riot.util.styleManager.add(css);
    // return empty to skip riot scoped processing
    return '';
};

// Set base route
//route.base('/');

// Define current slide & step
var current_slide, current_step;

// Handle all routes
route(function(slide, step) {

    // Save current slide & step
    current_slide = slide || 1;
    current_step  = step || 1;

    // Get slide index
    // array indexes start with 0 this is why we substrat 1 to the slide number
    var index = current_slide - 1;

    // Define options array
    var opts = typeof slides !== 'undefined' && index in slides ? {
        slide: slides[index]
    } : {
        error : 'it seems like the slides array is not defined or maybe the requested slide does not exist.'
    };

    // Mount tags
    riot.mount('*', opts);
});

// Start router
route.start(true);
