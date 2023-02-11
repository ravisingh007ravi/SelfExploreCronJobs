const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
  
app = express();
  

cron.schedule("*/7 * * * * *", function() {
  
    let data = `${new Date().toUTCString()} 
                : Server is working\n`;
      

    fs.appendFile("logs.txt", data, function(err) {
          
        if (err) throw err;
          
        console.log("Status Logged!");
    });
});
  
app.listen(3000);