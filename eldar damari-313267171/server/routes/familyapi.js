var express = require('express');
var router = express.Router();
var familyModule= require('../modules/family.module')
 var allfamilyModule= require('../modules/family.module')
//get all tablets
router.get('/tablets/', async (req, res, next)=> {
   res.json(await familyModule.get());
}); 
//get  tablet by id
router.get('/tablets/:id', async (req, res, next)=> {
    res.json(await familyModule.get(req.params.id)); 
}); 
//add new tablet
router.post('/tablets/', async (req, res, next)=> {
    res.json(await familyModule.save(req.body)  ); 
}); 
//delete a tablet
router.delete('/tablets/:id', async (req, res, next) => {
    res.json(await familyModule.delete(req.params.id)); 
});
 
//update
router.put('/tablets/:id', async (req, res, next) => {
    res.json(await familyModule.update(req.params.id , req.body)); 
});

//get all familyly
router.get('/family/', async (req, res, next)=> {
    res.json(await familyModule.get());
 }); 




module.exports = router;

