// jQuery.dynItems, (c) 2012 Juliusz Gonera, MIT License
// https://github.com/jgonera/jquery.dynitems

(function($) {
  "use strict";

  $.fn.dynItems = function(options) {
    var element = this;
    var o = $.extend({
      defaultData: {},
      items: [],
      removeButton: '.remove',
      n: 0
    }, options);
    var n = o.n;
    
    function addItem(data, callback) {
      data = $.extend({}, o.defaultData, data, { n: n });
      var html = o.template(data);
      var item = $(html);
      item.appendTo(element);
      item.find(o.removeButton).click(function() {
        item.remove();
        return false;
      });
      ++n;
      if (callback) callback(item);
    }

    $.each(o.items, function(i, data) { addItem(data); });
    element.addItem = addItem;

    return element;
  };
}(jQuery));
