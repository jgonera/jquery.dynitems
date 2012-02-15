// jQuery.dynItem, (c) 2012 Juliusz Gonera, MIT License
// https://github.com/jgonera/jquery.dynitem

(function($) {
  "use strict";

  $.fn.dynItem = function(template, options) {
    var o = $.extend({
      removeButton: '.remove',
      pattern: /\$n\$/g,
      n: 0
    }, options);
    var n = o.n;
    
    this.click(function() {
      var html = template.replace(o.pattern, n);
      var item = $(html);
      item.appendTo(o.parent);
      item.find(o.removeButton).click(function() {
        item.remove();
        return false;
      });
      ++n;
      return false;
    });
  };

}(jQuery));

