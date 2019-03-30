var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//MongoDB region Start
var config = require("./server/config/config");
config.setConfig();
const options = {
    //useMongoClient: true,
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 100, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
mongoose.connect(process.env.MONGOOSE_CONNECT,options).then(
  ()=>{
    console.log("connected to mongoDB")},
 (err)=>{
     console.log("err",err);
});
//MongoDB region End

var datacontroller = require("./server/controllers/data-controller")

app.get('/api/get-data', datacontroller.getData)
app.post('/api/post-data', datacontroller.postData);

app.listen(6000, ()=>{
    console.log('Server is Up')
})