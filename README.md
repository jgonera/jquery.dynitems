jQuery.dynItems
===============

A very simple plugin to add/remove elements (list items, form inputs, etc.)
with a single button/link click, or other event.

Usage
-----

To add a new item to `#items` each time `#somebutton` is clicked use:

```js
    var items = $('#items').dynItems({
        // template function that accept an object with data
        template: function(data) {
            var template = '<li>name # <button class="begone">Remove</button></li>';
            return template.replace(/#/g, data.n).replace(/name/g, data.name);
        },
        // default data for items
        defaultData: { name: 'Item' },
        // existing (predefined) items
        items: [{ name: 'Banana' }, { name: 'Cake' }],
        // the element that removes the new item (default '.remove')
        // this element has to be inside the newly created item
        removeButton: '.begone',
        // start value of the counter (default: 0)
        n: 1
    });

    $('#somebutton').click(items.addItem);
```

You can also use some templating engine instead of inventing your own
function. `addItem()` also allows you to specify data for the item and
a callback. See `index.html` for an example.

