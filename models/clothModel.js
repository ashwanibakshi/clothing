const mongoose = require('mongoose');

const clothSchema = new mongoose.Schema({
   pname:String,
   brand:String,
   price:Number,
   stock:{
       type:Number,
       min:1
   },
   pfor:String,
   size:String,
   category:[String],
   uid:{
       type:mongoose.Types.ObjectId,
       ref:'users'
   }
});

module.exports = mongoose.model('cloths',clothSchema);