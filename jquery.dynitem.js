// jQuery.dynItem, (c) 2012 Juliusz Gonera, MIT License
// https://github.com/jgonera/jquery.dynitem

(function($) {
  "use strict";

  $.fn.dynItem = function(options) {
    var o = $.extend({
      parent: 'body',
      removeButton: '.remove',
      n: 0
    }, options);
    var n = o.n;
    
    function addItem(data) {
      data = data || {};
      var html = o.template($.extend(data, { n: n }));
      var item = $(html);
      item.appendTo(o.parent);
      item.find(o.removeButton).click(function() {
        item.remove();
        return false;
      });
      ++n;
      return false;
    }

    this.click(addItem);
    $.each(o.items, function(i, data) { addItem(data); });
  };
}(jQuery));

