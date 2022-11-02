'use strict';

const app = require('../app');
const logger = require('../src/config/logger');
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  logger.info(`Started in ${PORT} port`);
});
