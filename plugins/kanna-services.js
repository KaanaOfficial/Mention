import Vue from 'vue';
import kaanaServices from '@kaana/kaana-services-js';

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

Vue.prototype.kaanaServices = kaanaServices;

kaanaServices.authenticate(API_KEY, API_SECRET, SUPABASE_KEY, SUPABASE_URL, (err, token) => {
  if (err) {
    console.error('Failed to authenticate with Kaana Auth:', err);
  } else {
    console.log('Successfully authenticated with Kaana Auth. Token:', token);
    
  }
});
