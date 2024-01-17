const supabase =  require("./db.js");
const express = require('express'); 
require('dotenv').config();
const app = express(); 
const PORT = process.env.port;
console.log(PORT);

app.listen(PORT, async (error) =>{ 
    if(!error){
        console.log("Server is Successfully Running, and App is listening on port "+ PORT); 
        const data = await supabase.any('SELECT * FROM "Division"');
        console.log(data);
    }
    else
        console.log("Error occurred, server can't start", error); 
    } 
); 
