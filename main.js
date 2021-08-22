const express = require('express');
//connext to routes folder
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes');



const PORT = process.env.PORT || '3001'; // heroku port issue https://fredriccliver.medium.com/heroku-router-at-error-code-h10-desc-app-crashed-method-get-path-46da4cdce7ad
const app = express ();

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