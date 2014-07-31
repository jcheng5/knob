HTMLWidgets.widget({
  name: "knob",
  type: "output",
  sizing: {
    fillViewer: true,
    fillBrowser: true,
    padding: 15
  },
  initialize: function(el, width, height) {
    $(el).knob();
    if (width) {
      $(el).trigger("configure", {
        width: Math.min(width, height),
        height: Math.min(width, height)
      });
    }
  },
  renderValue: function(el, data) {
    $(el).trigger("configure", data);
    $(el).val(data.value).trigger("change");
  },
  resize: function(el, width, height) {
    $(el).trigger("configure", {
      width: Math.min(width, height),
      height: Math.min(width, height)
    })
  }
});
