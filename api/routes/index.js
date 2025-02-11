var express = require('express');
const router = express.Router();

const fs = require("fs")

const routes = fs.readdirSync("./routes")

for(let route of routes){
 if(route.includes(".js") && route != "index.js" ){
  router.use("/" + route.replace(".js",""), require("./"+ route))
  console.log("/api")
 }
}
module.exports = router;
