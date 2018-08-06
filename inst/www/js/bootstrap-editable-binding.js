// URL input binding
// This input binding is very similar to textInputBinding from
// shiny.js.
var editabletext = new Shiny.InputBinding();


// An input binding must implement these methods
$.extend(editabletext, {
  
  // This returns a jQuery object with the DOM element
  find: function(scope) {
    return $(scope).find('a.editabletext');
  },
  // this method will be called on initialisation
  initialize: function(el){

     // initialize our switch based on the extracted state
     // note $("#" + el.id) equals the input tag we generated
     $("#" + el.id).editable();
  },
  // return the ID of the DOM element
  getId: function(el) {
    return el.id;
  },
  
  // Given the DOM element for the input, return the value
  getValue: function(el) {
    return $(el).text();
  },
  
  // Given the DOM element for the input, set the value
  setValue: function(el, value) {
    $(el).text(value);
  },
  
  // Set up the event listeners so that interactions with the
  // input will result in data being sent to server.
  // callback is a function that queues data to be sent to
  // the server.
  subscribe: function(el, callback) {
    $(el).on('save.editabletext', function(event) {
      alert( "clicked" );
      callback(true);
    });
  },
  
  // Remove the event listeners
  unsubscribe: function(el) {
    $(el).off('.editabletext');
  },
  
  // Receive messages from the server.
  // Messages sent by updateUrlInput() are received by this function.
  receiveMessage: function(el, data) {
    if (data.hasOwnProperty('label'))
      this.setValue(el, data.value);
    $(el).trigger('change');
  },
  getRatePolicy: function() {
    return {
      policy: 'direct'
    };
  }
});
  
  Shiny.inputBindings.register(editabletext, 'shiny.editableText');