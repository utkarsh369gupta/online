const express = require("express")

const app = express()

app.get('/',(req, res)=>{
    return res.send("This is Home page of Utkarsh.")
})

app.listen(3000,()=>{
    console.log("Server stared!!!!")
})