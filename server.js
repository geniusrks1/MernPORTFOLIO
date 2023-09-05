const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const path=require('path');


//dotenv configuration
dotenv.config();

//rest object
const app=express();

//middileware
app.use(cors());
app.use(express.json());

// static file access
app.use(express.static(path.join(__dirname,'./client/build')))


//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'))

app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

const PORT=process.env.PORT || 8000;
app.listen( PORT,()=>console.log(`server is running on port ${PORT}`));