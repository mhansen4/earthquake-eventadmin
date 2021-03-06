/* global mocha */
'use strict';


mocha.setup('bdd');

// Add each test class here as they are implemented
require('./spec/AddEditPageTest');
require('./spec/ContentsManagerViewTest');
require('./spec/EditLinkViewTest');
require('./spec/EventsAssociatedViewTest');
require('./spec/MakeSignificantViewTest');
require('./spec/ProductTest');
require('./spec/TextProductViewTest');

if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}
