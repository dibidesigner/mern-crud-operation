const express = require('express');
const studentModel = require('../Models/studentModel');
const router = express.Router();
const studentformMiddleware = require('../Middleware/studentPostMiddleware')

// Student registration route
router.post('/studentregister', studentformMiddleware,  async (req, res) => {
    try {
        const savedStudent = await studentModel.create(req.body);

        res.send('Data Saved');
        
    } catch (error) {
        console.error('Error saving student data:', error);
    }
});

router.get('/getstudentData', async (req, res)=>{
    try {
        const students =await studentModel.find();
        res.send(students);
    } catch (error) {
        console.log(error);
    }
    
});


router.delete('/delete/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const udata = await studentModel.findByIdAndDelete(id);
        res.send('Data Deleted');
    } catch (error) {
        res.send(error);
    }
});


router.post('/getuser', async (req, res)=>{
    const { id  } = req.body;
    
    try {
        const udata = await studentModel.findById(id);
        res.json(udata);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
