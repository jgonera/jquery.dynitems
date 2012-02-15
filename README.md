jQuery.dynItem
==============

A very simple plugin to add/remove elements (list items, form inputs, etc.)
with a single button/link click.

Usage
-----

To add a new item each time `#somebutton` is clicked use:

```js
    $('#somebutton').dynItem('<li>Item # <button class="begone">Remove</button></li>', {
        parent: '#items',        // parent element
        removeButton: '.begone', // the element that removes the new item (default '.remove')
        n: 1,                    // start value of the counter (default: 0)
        pattern: /#/g,           // what will get replaced with counter value (default: $n$)
    });
```

