const Author = require('./../models/Author')
const Cookbook = require('./../models/Cookbook')

Author.find({}).remove(() => {
  Cookbook.find({}).remove(() => {
    let meera = Author.create({
      firstName: 'Meera',
      lastName: 'Sodha'
    }).then(author => {
      Promise.all([
        Cookbook.create({
          title: 'Made in India',
          yearPublished: 2014
        }).then(cookbook => {
          author.cookbooks.push(cookbook)
        }),
        Cookbook.create({
          title: 'Fresh India',
          yearPublished: 2018
        }).then(cookbook => {
          author.cookbooks.push(cookbook)
        })
      ]).then(() => {
        author.save()
      })
    })
    let alison = Author.create({
      firstName: 'Alison',
      lastName: 'Roman'
    }).then(author => {
      Promise.all([
        Cookbook.create({
          title: 'Dining In',
          yearPublished: 1917
        }).then(cookbook => {
          author.cookbooks.push(cookbook)
        })
      ]).then(() => {
        author.save()
      })
    })
    let kenji = Author.create({
      firstName: 'J. Kengi',
      lastName: 'López-Alt'
    }).then(author => {
      Promise.all([
        Cookbook.create({
          title: 'The Food Lab',
          yearPublished: 2015
        }).then(cookbook => {
          author.cookbooks.push(cookbook)
        })
      ]).then(() => {
        author.save()
      })
    })
  })
}).then(console.log('seed added'))
