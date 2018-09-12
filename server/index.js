const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
var mongoose = require("mongoose");
require('./config/environment');
require('./database');
var cors = require('cors');

const routes       = require('./routes');
const authConfig   = require('./config/passport');

const assetFolder  = path.resolve(__dirname, '../dist/');
const port         = process.env.PORT;
const app          = express();

app.use(express.static(assetFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

authConfig(app, express);

app.use('/', routes);
var nameSchema = new mongoose.Schema({
    AdTittle: String,
    phnumber: String,
    user: String,
    Category: String,
    location: String,
    Addescription: String,
    price:String,
    imageurl: String,
  });
  var Addata = mongoose.model("Addata", nameSchema);
app.post("/addad", (req, res) => {
        var myData = new Addata(req.body);
        myData.save()
          .then(item => {
            res.redirect('/Successubmit')
            
          })
          .catch(err => {
            res.status(400).send("unable to save to database");
            
         
      })
});

app.post("/getmobile", function(req, res){
  Addata.find({"Category":"mobiles"}, function(err, result){
		if(err) res.json(err);
    if(result) res.json(result);
  res.end();
});
  });
  app.post("/getproperties", function(req, res){
    Addata.find({"Category":"properties"}, function(err, result){
      if(err) res.json(err);
      if(result) res.json(result);
    res.end();
  });
    });
    app.post("/getcars", function(req, res){
      Addata.find({"Category":"cars"}, function(err, result){
        if(err) res.json(err);
        if(result) res.json(result);
      res.end();
    });
      });
     
      app.post("/getelectroincs", function(req, res){
        Addata.find({"Category":"electronics"}, function(err, result){
          if(err) res.json(err);
          if(result) res.json(result);
        res.end();
      });
        });
        

        app.post("/getjobs", function(req, res){
          Addata.find({"Category":"jobs"}, function(err, result){
            if(err) res.json(err);
            if(result) res.json(result);
          res.end();
        });
          });
          
        app.post("/getbikes", function(req, res){
          Addata.find({"Category":"bikes"}, function(err, result){
            if(err) res.json(err);
            if(result) res.json(result);
          res.end();
        });
          });
          app.post("/getallads", function(req, res){
            Addata.find({}, function(err, result){
              if(err) res.json(err);
              if(result) res.json(result);
            res.end();
          });
            });
          
          
// app.post('/getmobile', (req, res) => {
//   var car = {type:"Fiat", model:"500", color:"white"};
//   res.json(car);
//   res.end();
// });
app.listen(port, () => console.log(`Server is listening on port ${port}`));
