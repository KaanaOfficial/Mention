import Vue from 'vue';
import kaanaServices from 'kaana-services-js';

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

Vue.prototype.$kaanaServices = kaanaServices;

kaanaServices.authenticate(API_KEY, API_SECRET, (err, token) => {
  if (err) {
    console.error('Failed to authenticate with Kaana Auth:', err);
  } else {
    console.log('Successfully authenticated with Kaana Auth. Token:', token);
    
  }
});
