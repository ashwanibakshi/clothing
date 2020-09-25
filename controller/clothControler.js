const clothModel = require('../models/clothModel');


module.exports.clothCntrl = {
    getAddCloth:async (req,res)=>{
       try {
           res.json('addcloth get');
       } catch (error) {
           console.log(error);
       }
    },
    postAddCloth:async (req,res)=>{
        try {
            var cloths = new clothModel({
             pname:req.body.pname,
             brand:req.body.brand,
             price:req.body.price,
             stock:req.body.stock,
             pfor:req.body.pfor,
             size:req.body.size,
             category:req.body.category,
             uid:req.body.uid
            });
            var response = await cloths.save();
            if(response){
                res.json(response);
            }
        } catch (error) {
            console.log(error);
        }
    },
    getEditCloth:async (req,res)=>{ 
      try {
          var response = await clothModel.find({_id:req.params.id});
          if(response){
              res.json(response);
          } 
      } catch (error) {
          console.log(error)
      }
    },
    postEditCloth:async(req,res)=>{
      try {
          var cloths = {
              pname:req.body.pname,
              brand:req.body.brand,
              price:req.body.price,
              stock:req.body.stock,
              pfor:req.body.pfor,
              size:req.body.size,
              category:req.body.category,
              uid:req.body.uid
          }
          var response = await clothModel.update({_id:req.body.id},{$set:cloths});
          if(response){
              res.json(response);
          }
      } catch (error) {
          console.log(error);
      }
    },
    getDelCloth:async (req,res)=>{
         try {
            var response = await clothModel.deleteOne({_id:req.params.id});
            if(response){
                res.json(response);
            } 
         } catch (error) {
            console.log(error);
         }
    },
    getUserCloth:async (req,res)=>{
        try {
            var pageNo = 1;
            var perPage = 2;
            console.log('query',req.query.page);
            if(req.query.page){
                pageNo=req.query.page
            }
            var query={};
          query.skip = (perPage*pageNo)-perPage;
          query.limit = perPage;
          var response = await clothModel.find({},{},query);
          if(response){
              var counnt = await clothModel.count();
              res.json({
                  data:response,
                  current:pageNo,
                  page:Math.ceil(counnt/perPage)
              });
          }
        } catch (error) {
            console.log(error);
        }
    }
}