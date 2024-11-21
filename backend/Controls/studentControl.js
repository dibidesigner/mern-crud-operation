const express = require('express');
const studentModel = require('../Models/studentModel');
const router = express.Router();

// Student registration route
router.post('/studentregister', async (req, res) => {
    try {
        const savedStudent = await studentModel.create(req.body);

        res.send('Data Saved');
        
    } catch (error) {
        console.error('Error saving student data:', error);
    }
});

module.exports = router;
