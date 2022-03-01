//import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema
/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/

const Cookbook = new Schema({
    title: String,
    yearPublished: Number
})

//export model
module.exports = mongoose.model('Cookbook', Cookbook)