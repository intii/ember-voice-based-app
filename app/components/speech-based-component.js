import Component from '@ember/component';
import VoiceCommandDispatcher from '../utils/voice-command-dispatcher/src/voice-command-dispatcher';

/**
 * Adds or removes the component from the intent registry
 * @param  {String} method To register or unregister the component
 */
function _toggleComponentListening(method) {
  var intent;
  var action;
  for (intent in this.intentActionMap) {
    action = this.intentActionMap[intent];
    window.VCD[method](intent, action);
  }
}

export default Component.extend({
  init() {
    this._super(...arguments);
    if (!window.VCD) {
      window.VCD = new VoiceCommandDispatcher(this.attrs.serviceName, this.attrs.config.value);
      window.VCD.start();
    }
  },
  
  didInsertElement() {
    _toggleComponentListening.call(this, 'register');
  },

  willDestroyElement() {
    _toggleComponentListening.call(this, 'unregister');
  }
});
