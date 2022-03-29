const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./middlewares/logger');

require('dotenv').config();

const middlewares = require('./middlewares/errorHandler');
const api = require('./routes/api');
const web = require('./routes/web');

const app = express();

// middlewares
app.use(morgan('dev')); // logging of http calls
app.use(helmet()); // header security
app.use(cors()); // cross-origin resource sharing
app.use(express.json()); // json parser

// routes
app.use('/api', api);
app.use('/', web);

// cors
app.use(cors({
    origin : process.env.ORIGIN, 
    credentials: true, 
    allowedHeaders : 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Set-Cookie, *'
}));

app.use(middlewares.notFound); // 404 full path logging
app.use(middlewares.errorHandler); // basic error handling


// Initialize
const port = process.env.PORT || 3001;

const main = async () => {
  app.listen(port, () => {
    logger.ready(`Listening: http://localhost:${port}`);
  });
};

main();