require('dotenv').config({ path: '.env' }); // ensures env is loaded for this script

const express = require('express');

function tryMount(path, routerFactory) {
  const app = express();
  try {
    app.use(path, routerFactory());
    console.log('OK:', path);
  } catch (e) {
    console.error('BAD:', path, e.message);
  }
}

tryMount('/api/auth', () => require('./services/routes/auth'));
tryMount('/api/vendors', () => require('./services/routes/vendor')); 
tryMount('/api/markets', () => require('./services/routes/markets'));
