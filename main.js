const express = require('express');
//connext to routes folder
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes');


const app = express ();
const PORT = 3001; // local port number

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




//listen to run local port
app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
  });