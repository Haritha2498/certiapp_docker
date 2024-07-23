const express=require('express');
const app=express();
const port=3004;
app.use(express.json());

const path=require('path');
const cors = require("cors");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(
    cors({ 
      origin: "http://localhost:3010",
    })
  );

const mongoose=require('mongoose')
const sample =require ('./models/schema.js')



mongoose.connect(
    "mongodb://mongodb:27017/certiapp_React"
);

const database=mongoose.connection;
database.on("error",(error)=>
{
    console.log(error);
});
database.once("connected",()=>
{
    console.log("Database connected")
})


// let certidata=[];         //array declared for storing form values


//router for home page

app.get('/',(req,res)=>                                 
{
res.sendFile(path.join(__dirname,'public','home.html'))
})

//router for form page
app.get('/form',(req,res)=>
{
    res.sendFile(path.join(__dirname,'public','certiform.html'))
})

//router for certificate page

app.get('/certificate',(req,res)=>
{
    res.sendFile(path.join(__dirname,'public','issuecerti.html'))
    
})


app.post('/submitform',async(req,res)=>
{   
    try{
    const {course, cerid, cname, grade, date}=req.body;
    console.log(req.body);
    const newdata ={course, cerid, cname, grade, date};
    console.log("geytry")
    const details=await sample.create(newdata) 
    res.json(details);
    }
    catch(error){
        console.log("error")
        res.status(500).json()
    }
})



app.get('/form/:id',(req,res)=>
{
    const id=req.params.id;
    
    if(!id)
    {
        return res.status(404).send("certificate not found"+id)
    }
    
        res.sendFile(path.join(__dirname,'public','issuecerti.html'))
    
})



app.get('/apim/form/:id',async(req,res)=>
{
    const id=req.params.id;
    console.log("data inside get form");
    
    const details = await sample.findOne({cerid: id});

    
        res.json(details)
    

})

app.listen(port,()=>
{
    console.log("running in port: "+port)
})


