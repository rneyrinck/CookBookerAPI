const express = require('express')
const router = express.Router()

// Require the Cookbook controller.
const Cookbook = require('../models/Cookbook.js')
// Write the route to list all cookbooks
router.get('/',(req,res)=>{
    Cookbook.find({}).then((allTheBooks)=>{
        res.status(200).json(allTheBooks)
    })
    .catch((err)=>{
        console.log(err)
    })
})
// Write the route to get cookbook by title
router.get('/:title', (req,res)=>{
    
    Cookbook.find({title: req.params.title}).then((book)=>{
        res.status(200).json(book)
    })
})
// Write the route to get cookbook by year published

// Write the route to create a cookbook

// Write the route to update a cookbook

// Write the route to delete the cookbook by title


module.exports = router;