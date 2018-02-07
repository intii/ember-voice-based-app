(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['voice-command-dispatcher'],
      __esModule: true
    };
  }

  define('voice-command-dispatcher', [], vendorModule);
})();
