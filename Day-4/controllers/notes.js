const notebook = require('../model/notes')



const createNotebook = async(req,res)=>{
    try {
        const{heading,content}=req.body;
        const sendDate=await notebook.create({heading,content})
        res.json({
            message:"Notebook Created",
            sendDate
        })
    } catch (e) {
        res.send(e.message);
    }
}
                                                                  
const getNotes=async (req,res) => {
    try {
        const allNotebooks=await notebook.find();
        res.json({
            allNotebooks
        })
    } catch (e) {
        res.send(e.message)
    }
}
const updateNotebook=async (req,res) => {
 try {

   const id=req.params.id
  const{name,heading}=req.body;
  const updateNotes=await Notebook.findByIdAndUpdate(
    id,{name,heading},{new:true}
  )
  if(!updateNotebook){
    return res.send("notes is not found")
  }

  res.json({
    message:"Notes updated successfully",
    updateNotes
  })

 } catch (error) {
    res.send(error.message);
 }
}
const deleteNotebook=async(req,res) =>{
    try{
    const id=req.params.id;
    const notebook=await Notebook.findByIdAndDelete(id);
    if(!notesbook){
        return res.send("Notebook not found");
    }
    res.send("Notes is deleted");

}
catch (e){
    
}
}

module.exports={createNotebook,getNotes,updateNotebook,deleteNotebook}