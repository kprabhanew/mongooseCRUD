
module.exports.setConfig = function(){
    process.env.MONGOOSE_CONNECT = "mongodb://****:*****@ds151602.mlab.com:51602/mlabdemo"
    console.log(process.env.MONGOOSE_CONNECT);
}