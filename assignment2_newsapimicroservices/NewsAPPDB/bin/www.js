const config = require('../config');
const app = require('../app');
let PORT  = config.PORT || 3000



app.listen(PORT,()=>console.log(`Listening on Port ${config.PORT}`))