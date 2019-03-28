
// Add custom css parser to disable style scoping when type="text/unscoped" is defined
// @see https://riot.js.org/api/compiler/#-riotparserscss-tagname-css
riot.parsers.css.unscoped = function(tag, css) {
    // inject css manually
    css && riot.util.styleManager.add(css)
    // return empty to skip riot scoped processing
    return ''
}

// Set base route
//route.base('#')

// Mount tags
riot.mount('*')
