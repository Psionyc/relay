const StreamRouter = require('express').Router()

StreamRouter.post('/create', (req, res)=>{
    const {name, keys}  = req.body


})


StreamRouter.get('/all',(req, res)=>{

})
StreamRouter.get('/broadcasting',(req, res)=>{

})
StreamRouter.get('/some/:offset/:limit',(req, res)=>{

})

module.exports = {
   StreamRouter
};