const App = require('./app.js') 
const DB=require('./database.js')

App.listen(App.get('puerto'),()=>console.log("Servidor en línea. Puerto: " + App.get('puerto')) );