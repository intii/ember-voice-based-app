import Route from '@ember/routing/route';
// import config from '../../config/api';

export default Route.extend({
  model() {
    return {
      apiai:{
        accessToken: 'dab81ebd733343589d2ee314b75deb10'
      }
    }
  }
});
