var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema- the structure of the db
var familySchema = new Schema({
  date:  String,
  family: String,
  description: String
 
});

//we work with the model to save as collection
var Family = mongoose.model('Family', familySchema);

module.exports= Family;



/*
module.exports =  mongoose.model('Tablet', 
new Schema({
    model:  String,
    size: Number,
    price: Number,
    maker: String 
  })
);
*/
