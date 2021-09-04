const config = require('../config');
const app = require('../app');

const PORT = config.PORT || 3000;

app.listen(PORT || 3000 ,()=>`Listening Api Gateway at ${PORT}`)