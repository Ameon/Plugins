document.observe('dom:loaded', function(evt) {
  var config = {
    '.chosen-select'           : {}
  }
  
  for (var selector in config) {
      new Chosen(element, config[selector]);
  }
});
