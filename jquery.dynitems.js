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
      var templateData = $.extend({}, o.defaultData, data, { n: n });
      var html = o.template(templateData);
      var item = $(html);
      item.appendTo(element);
      item.find(o.removeButton).click(function() {
        item.remove();
        return false;
      });
      ++n;
      if (callback) callback(item);
      if (data instanceof $.Event) data.preventDefault();
    }

    $.each(o.items, function(i, data) { addItem(data); });
    element.addItem = addItem;

    return element;
  };
}(jQuery));

