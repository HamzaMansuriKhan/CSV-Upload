const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://hamzamansurikhan:Hamzaman123@cluster0.b5kpqma.mongodb.net/csv');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
