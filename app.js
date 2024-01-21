const supabase =  require("./db.js");
const express = require('express'); 
const cors = require('cors');
require('dotenv').config();
const axios = require("axios");
const app = express(); 
const PORT = process.env.port;

app.use(express.json());
app.use(cors({origin: '*'}));

app.get('/division', async (req, res) => {
    try{
        const data = await supabase.any('SELECT id, name FROM "Division"');
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
});

app.post('/district', async (req, res) => {
    try{
        const division = req.body['division']; 
        const data = await supabase.any('SELECT id, name FROM "District" WHERE "divisionId" = $1', [division]);
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
});

app.post('/upazilla', async (req, res) => {
    try{
        const district = req.body['district']; 
        const data = await supabase.any('SELECT id, name FROM "Upazilla" WHERE "districtId" = $1', [district]);
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
});

app.post('/union', async (req, res) => {
    try{
        const upazilla = req.body['upazilla']; 
        const data = await supabase.any('SELECT id, name FROM "UnionParishad" WHERE "upazillaId" = $1', [upazilla]);
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
});

app.listen(PORT, async () => {
    // console.log(`Pushti-AuthenticationMS is running on port ${PORT}`);
    console.log(`Pushti-LocationMs listening on port ${PORT}`);
    try {
      let serviceRegisterUrl = String(process.env.serviceRegistryUrl) + "/register";
  
      await axios.post(serviceRegisterUrl, {
        name: process.env.selfName,
        url: process.env.selfUrl,
      });
      console.log("Service registered successfully");
    } catch (error) {
      console.error("Failed to register service:", error);
      // turn off server if service registration fails
      process.exit(1);
    }
  });
  
  // Function to de-register the service
  const deregisterService = async () => {
    try {
      let serviceRegisterUrl =
        String(process.env.serviceRegistryUrl) + "/deregister";
      await axios.post(serviceRegisterUrl, { name: process.env.selfName });
      console.log("Service de-registered successfully");
    } catch (error) {
      console.error("Failed to de-register service:", error);
      process.exit(1);
    }
  };
  
  const gracefulShutdown = async () => {
      await deregisterService();
      process.exit(0);
  };
  
  // Listen for termination and interrupt signals
  process.on('SIGTERM', gracefulShutdown); // For termination signal
  process.on('SIGINT', gracefulShutdown); // For interrupt signal
  process.on('uncaughtException', gracefulShutdown); // For uncaught exceptions