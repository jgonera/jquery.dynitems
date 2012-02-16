jQuery.dynItem
==============

A very simple plugin to add/remove elements (list items, form inputs, etc.)
with a single button/link click.

Usage
-----

To add a new item each time `#somebutton` is clicked use:

```js
    $('#somebutton').dynItem(, {
        // template function that accept an object with data
        template: function(data) {
            var template = '<li>Item # <button class="begone">Remove</button></li>';
            return template.replace(/#/g, data.n).replace(/name/g, data.name || 'Item');
        },
        // existing (preadded) items
        items: [{ name: 'Banana' }, { name: 'Cake' }],
        // parent element
        parent: '#items',
        // the element that removes the new item (default '.remove')
        removeButton: '.begone',
        // start value of the counter (default: 0)
        n: 1
    });
```
You can also use some templating engine instead of inventing your own
function. See `index.html` for an example.

