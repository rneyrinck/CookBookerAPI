
# Cookbooker

Hi,
    
   This is the first backend API I created as a project in General Assembly's Bootcamp. 
    
   Its a bit rough around the edges, and my skills have improved greatly since embarking on this first experience. 
    
   I apreciate you taking a look and if you have any questions please let me know!
    
Best,
    
   Robert

[Deployed Link](https://pages.git.generalassemb.ly/rob-neyrinck/Cookbook-client/#/cookbooks)

# Description

This is a simple backend API developed with MongoDB, Mongoose, and tested using Postman. The goal is for users to be able to save Authors and cookbooks to a database for other users to view. The authors and cookbooks are linked in their schema so when a book is added, that author is also added to its seperate list. This also enables deletion of an author which results in deletion of their entire cookbook collection.

In deployment I chose not to add the delete functionality for users as this functionality should be tied to a user login which I would add in a future iteration.


## Technologies Used

- Express
    * Express is a web framework that allows developers to use multiple different HTTP requests at a specific URL. 
- MongoDB
    * MongoDB is a database management system used that allows developers to extract data from a site or application 
- Mongoose
    * Mongoose allows manipulation of data in a MongoDB database 
- Postman
    * Postman is a tool used for testing applications databases before they are deployed 

## Routing Table

Defines the routes

| **URL**               | **HTTP Verb** | **Action** | **Description**                |
| --------------------- | ------------- | ---------- | ------------------------------ |
| /                     | GET           | index      | default route                  |
| /authors              | GET           | index      | get all authors                |
| /authors/:firstName   | GET           | show       | get author by first name       |
| /authors              | POST          | create     | create new author              |
| /authors/:authorid    | PUT           | update     | update a single author         |
| /authors/:firstName   | DELETE        | delete     | delete 1st cookbook            |
| /cookbooks            | GET           | index      | get all cookbooks              |
| /cookbooks/:title     | GET           | show       | get book by title              |
| /cookbooks/year/:year | GET           | show       | get cookbook by published year |
| /cookbooks            | POST          | create     | create new book                |
| /cookbooks/:bookid    | PUT           | udpate     | update book by id              |
| /cookbooks/:title     | DELETE        | delete     | destroy a single book by id    |


