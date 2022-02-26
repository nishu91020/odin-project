const express = reuire('express');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
