//Import connection
const mongoose = require('./../db/connection')
const Schema = mongoose.Schema
// const Cookbook = require('./Cookbook')
/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

const Author = new Schema({
    firstName: String,
    lastName: String,
    cookbooks: [ {
        ref: 'Cookbook',
        type: mongoose.Schema.Types.ObjectId
    } ]
})


//export model named "Author"
module.exports = mongoose.model('Author', Author)



