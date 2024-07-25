import express, { response } from "express";
import axios from "axios";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import path from "path";
import bodyParser  from "body-parser";

//define the port
const port = 4000;

//define the app
const app = new express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

//set the API key
const APIKEY = "Your-APIKEY";

app.get("/",(req,res) =>{
    res.render("index.ejs");
})

app.listen(port, err =>{
    err ? 
    console.log("Error in server setup") :
    console.log("Server listening on Port", port)
});

app.get("/recipie",async (req,res) =>{

    //getting the dish entered by the user
    const dish = req.query.dish;

    const APIURL = `https://api.api-ninjas.com/v1/recipe?query=${dish}`;
    try{
        const response = await axios.get(APIURL,{
            headers :{
                'X-Api-Key': APIKEY
            }
        });
        res.render("index.ejs",{content:response.data});
    }catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    
    
})
