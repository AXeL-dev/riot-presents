
// Add custom css parser to disable style scoping when type="text/unscoped" is defined
// @see https://riot.js.org/api/compiler/#-riotparserscss-tagname-css
riot.parsers.css.unscoped = function(tag, css) {
    // inject css manually
    css && riot.util.styleManager.add(css);
    // return empty to skip riot scoped processing
    return '';
};

// Add another css parser to allow definition of custom style on a slide tag
riot.parsers.css.custom = function(tag, css) {
    // loop on slides array
    var id = 1, style = '';
    slides.forEach(function(slide) {
        // Generate slide id
        var slide_id = 'slide-' + id++;
        // Add slide style & bind it to the slide id (to isolate the slide style)
        if (slide.style) {
            // convert css rules to #slide-id selector { ... }
            style += slide.style.replace(/(^|\})\s*([^\{\}]+)\s*(?=\{)/g, '$1 #' + slide_id + ' $2');
            // fix :scope selector
            style = style.replace('#' + slide_id + ' :scope', ':scope #' + slide_id);
        }
    });
    // replace '@css' string with our custom style
    return css.replace(/@css/, style);
};

// Set base route
//route.base('/');

// Define current slide & step
var current_slide, current_step;

// Handle all routes
route(function(slide, step) {

    // Save current slide & step
    current_slide = slide || 1;
    current_step  = step || 0;

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
    riot.mount('presentation', opts);
});

// Start router
route.start(true);
