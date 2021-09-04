const app = require('../app')
// const dbConnection = require('../db')

// dbConnection.createConnection()
// const db = dbConnection.getConnection()
// db.on('error', (err) => {
//   console.log('MONGODB ERROR', err);
// });
// db.once('open', () => {
//   app.listen(8081, () => {
//     console.log(
//       '-------------------Express Application is listening in port-------------------------8081'
      
//     );
//   });
// });


app.listen(8081,()=>{
    console.log(`Listening at port 8081`)
});
