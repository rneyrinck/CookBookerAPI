const express = require("express");
const router = express.Router();

const Author = require("./../models/Author.js");
const Cookbook = require("./../models/Cookbook");

// Write the route to list all authors
router.get("/", (req, res) => {
  Author.find({})
    .then((allAuthors) => {
      res.status(200).json(allAuthors);
    })
    .catch((err) => {
      console.log(err);
    });
});
// Write the route to get authors by firstname
router.get("/:firstName", (req, res) => {
  Author.find({ firstName: req.params.firstName }).then((author) => {
    res.status(200).json(author);
  });
});
// Write the route to create an author:
router.post("/", (req, res) => {
  Author.create(req.body).then((author) => {
    res.status(200).json(author);
  });
});
// Write the route to update an author
router.put("/:authorid", (req, res) => {
  Author.findByIdAndUpdate(req.params.authorid, req.body, { new: true }).then(
    (author) => {
      res.status(200).json(author);
    }
  );
});
// Update the cookbook using Postman.
// localhost:4000/api/authors/bob
// [
//     {
//         "cookbooks": [],
//         "_id": "621d8c9cffe9310410aea0b6",
//         "firstName": "bob",
//         "lastName": "Neyrinck",
//         "__v": 0
//     }
// ]
// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)
// router.delete("/:firstname/:/deletebookid", async (req, res) => {
//   Author.find({firstName: req.params.firstname}).then((author) => {
//     Cookbook.findByIdAndDelete(req.params.deletebookid)
      
//       .then((author) => {
//         Author.find({}).then((allAuthors) => {
//           res.status(200).json(allAuthors);
//         });
//       });
//   });
// });
router.delete('/:firstName',(req,res)=>{
    Author.findOneAndDelete({firstName: req.params.firstName}).then(author=>{
            res.status(200).json(author)
       
    })
    // Author.findOneAndDelete({firstName: req.params.firstName}, {cookbooks: [0]}).then(author=>{
    //     Cookbook.delete(author[0])
    // })
})

module.exports = router;
