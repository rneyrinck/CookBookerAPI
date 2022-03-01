const express = require("express");
const router = express.Router();

// Require the Cookbook controller.
const Cookbook = require("../models/Cookbook.js");
// Write the route to list all cookbooks
router.get("/", (req, res) => {
  Cookbook.find({})
    .then((allTheBooks) => {
      res.status(200).json(allTheBooks);
    })
    .catch((err) => {
      console.log(err);
    });
});
// Write the route to get cookbook by title
router.get("/:title", (req, res) => {
  Cookbook.find({ title: req.params.title }).then((book) => {
    res.status(200).json(book);
  });
});
// Write the route to get cookbook by year published
router.get("/year/:year", (req, res) => {
  // const year = req.params.year
  // const yearNum = parseInt(year, 10)
  Cookbook.find({ yearPublished: req.params.year }).then((book) => {
    res.status(200).json(book);
  });
});
// Write the route to create a cookbook
router.post("/", (req, res) => {
  Cookbook.create(req.body).then((book) => {
    res.status(200).json(book);
  });
});
// Write the route to update a cookbook
router.put("/:bookid", (req, res) => {
  Cookbook.findByIdAndUpdate(req.params.bookid, req.body, { new: true }).then(
    (book) => {
      res.status(200).json(book);
    }
  );
});
// Write the route to delete the cookbook by title
router.delete("/:title", async (req, res) => {
  Cookbook.deleteOne({ title: req.params.title }).then((books) => {
    Cookbook.find({}).then((allTheBooks) => {
      res.status(200).json(allTheBooks);
    });
  });
});

module.exports = router;
