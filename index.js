const express        = require('express');
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');

mongoose.connect('mongodb://localhost:27017/clothings',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log('connection error',err))

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// route
app.use('/',require('./routers/routes'));

const port = process.env.PORT || 3000;
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('server run at port '+port);
    }
});