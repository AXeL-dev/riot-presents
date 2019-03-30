
var slides = [
    {
        title: 'Riot Presents',
        class: 'center',
        content: '<p>(Use the right and left arrow keys to navigate)</p>'
    },
    {
        title: 'A simple slide',
        content: `
            <ul>
                <li>Slides can contain multiple steps.</li>
                <step><li>Step 1</li></step>
                <step><li>Step 2</li></step>
                <step><li>Step 3</li></step>
            </ul>
        `
    },
    {
        title: 'Styling',
        content: `
            <p>Each slide can have it's own custom style:</p>
            <pre class="javascript"><code>{ expressions.example_code }</code></pre>
            <p>You can use the <span class="code">:scope</span> selector as in the example above to target the slide container without the need to specify a class.</p>
        `,
        expressions: {
            example_code: `
  var slides = [];

  slides.push({
    title:   'Slide Title',
    content: 'Some text or HTML content or expressions { expressions.text }',
    class:   'white-color', // Any CSS class(es) that should be applied to the slide container
    style:   \`
        :scope {
            background-color: dark;
        }
        .white-color {
            color: white;
        }
    \`, // custom CSS will work only on the elements inside the slide
    expressions: {
        text: 'This is inserted with an expression'
    } // expressions is a simple object used to fill Riot JS expressions
  });
            `
        }
    },
    {
        title: 'Syntax highlighting',
        content: `
            <p>Slides can also contain syntax highlighting:</p>
            <pre class="javascript"><code>{ expressions.example_code }</code></pre>
            <p>Highlight themes can be found in the <span class="code">css/highlight</span> folder.</p>
        `,
        expressions: {
            example_code: `
  {
    title:   'Slide Title',
    content: \`
        <pre class="html">
            <code>
                // Your code
            </code>
        </pre>
    \`
  }
            `
        }
    },
    {
        title: 'Navigation',
        content: `
            <ul>
                <li>Use <strong class="key">Enter</strong> or right arrow key to go to the next slide/step</li>
                <li>Use left arrow key to go back to the previous slide/step</li>
                <li>Use <strong class="key">F</strong> key to enter full screen mode</li>
                <li>Use <strong class="key">ESC</strong> key to exit full screen mode</li>
                <li>You can also use the navbar in the top right corner</li>
            </ul>
        `
    },
    {
        title: 'Thanks for reading!',
        class: 'center',
        content: `
            <p>Check back soon for more updates and components.</p>
            <p><span class="fa fa-lg fa-github"></span> <a href="https://github.com/AXeL-dev/riot-presents">github.com/AXeL-dev/riot-presents</a></p>
        `,
        style: `
            :scope {
                background-color: #222;
                color: #fff;
            }
        `
    }
];
