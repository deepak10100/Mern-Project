const mongoose = require('mongoose');
let dbConnection = async ()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/todo')
    .then(() => console.log('Connected!')).catch(()=>{
        console.log('Error connecting to database')
    });
}

module.exports= dbConnection