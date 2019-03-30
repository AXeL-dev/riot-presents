Riot Presents
=============

A [Riot](https://axel-dev.github.io/portfolio/post.html?id=4) slideshow components to create HTML presentations inspired by [react-presents](https://github.com/bvaughn/react-presents) & [Slidr](https://github.com/sarfraznawaz2005/Slidr).

[View Demo](https://axel-dev.github.io/riot-presents/)

Example Usage
-------------

To setup your own slides you only need to modify the [slides.js](js/slides.js) file & fill up the `slides` array with your data like so:

```javascript
var slides = [];

slides.push({
    title:   'Slide Title',
    content: 'Some text or HTML content or expressions { expressions.text }',
    class:   'white-color', // Any CSS class(es) that should be applied to the slide container
    style:   `
        :scope {
            background-color: dark;
        }
        .white-color {
            color: white;
        }
    `, // custom CSS will work only on the elements inside the slide
    expressions: {
        text: 'This is inserted with an expression'
    } // expressions is a simple object used to fill Riot JS expressions
});
```

That's it!

**Note**: you can merge all the tag files into one file/component to simplify the inclusion of riot-presents into your projects.

Contributing
------------

Read [contributing guidelines](https://github.com/AXeL-dev/contributing/blob/master/README.md).

License
-------

riot-presents is licensed under the [MIT](LICENSE) license.
