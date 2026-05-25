const express = require("express");
const mongoose = require("mongoose");

const app=express();

require("dotenv").config()
const port=process.env.port;
const mongo_url=process.env.mongo_url;

const {createAccount,login}=require("./controllers/user");
const { createNotebook,getNotes,updateNotebook,deleteNotebook} = require("./controllers/notes");



app.use(express.json());

app.post("/signin",createAccount);
app.post("/login",login);
app.post("/notebook",createNotebook);
app.get("/allNotes",getNotes);
app.put("/update/:id",updateNotebook)
app.put("/delete/:id",deleteNotebook)
app.delete("/api/delete-node/:id",deleteNotebook)

app.delete('/delete-note/:id', async (req, res) => {
    const noteId = req.params.id;
    // Add your database deletion logic here
     console.log(noteId);
      const notebook=await Notebook.findByIdAndDelete(noteId);
      if(!notebook){
        return res.send("Notebook not found");
      }
    
      res.send("Notes is deleted");
});







mongoose.connect(mongo_url)
.then(()=>{
    console.log("mongoDB is connected")
    app.listen(port,()=>{
        console.log(`Server is running PORT number ${port}`)
    })
})
.catch((e)=>{
    console.log("ERROR",e);
})

