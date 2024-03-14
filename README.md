# Acme Vacation Planner

## Block 34: Join Tables Part 1

### Learning Teams: Connecting

#### 💬 Discussion Prompt:
As a team, discuss the following prompt:
- We've covered foreign keys, but can you think of a scenario where a table might have two foreign keys?
- What if you were tasked with setting up a reservation system for restaurants and customers? How would you setup your tables?
- How are we doing on our team goals? Review them in this discussion thread.

## Lesson Overview
In this lesson, we will learn about backend fundamentals in a Node.js environment using our JavaScript skills.

### ✅ Learning Objectives:
1. Design schemas for relational databases.
2. Recognize and write common SQL queries.

## Guided Practice
Using what we have learned about Join Tables and separating modules in separate files, you will be building a data layer which can be used by an express server. The relationships of the database tables are represented in the diagram below:
- A vacation belongs to a user
- A vacation belongs to a place
- A user can have many vacations
- A place can be visited on a vacation many times

The data layer will export the following:
- `client` (a postgres client)
- `createTables` (a method which drops and recreates the tables)
  - A user has an id which is a unique identifier as well as a name.
  - A place has an id which is a unique identifier as well as a name.
  - A vacation has an id which is a unique identifier, as well as a place_id (foreign key from places table) and user_id (foreign key from users table) and a departure date which is a date. A `place_id` and a `user_id` should be required for a vacation.
- `fetchUsers` (a method which returns an array of users from the database)
- `fetchPlaces` (a method which returns an array of places from the database)
- `createUser` (a method which creates a user and returns the created user)
- `createPlace` (a method which creates a place and returns the created place)
- `createVacation` (a method which creates a vacation and returns the created vacation)
- `fetchVacations` (a method which returns an array of vacations)
- `destroyVacation` (a method which destroys a vacation)

### Steps:

1. **Setup project:**
   - Create a folder: `mkdir acme_vacations && cd acme_vacations`
   - Create package.json: `npm init -y`
   - Setup your git repo: `git init`
   - Install packages: `npm i pg` and `npm i nodemon -D`
   - Add a .gitignore so that your node_modules folder is not part of your repo
   - Create a folder for the server and add `index.js` file to the server folder (add an init function and call it in this file)
   - Add `db.js` file to the server folder (export a postgres client from `db.js`)
   - Connect your postgres client in the init function
   - Add a `start:dev` script to package.json

2. **Create Tables:**
   - Your data layer will need to have a method which drops and recreates the tables.
   - Create a method called `createTables` which does that and call it in your init function after you connect to your database.

3. **Create some users and places:**
   - We'll need to seed our database with some users and places in order to eventually create vacations.
   - After calling `createTables` in your init function, use Promise.all to create 3 users and 4 places.
   - You will need methods named `createUser` and `createPlace` in your `db.js` file.
   - You'll also need to install the UUID library (`npm i uuid`) and use the `v4` method to create a unique identifier.
   - Print out a couple of ids from the created data to ensure that it was created.

4. **Fetching users and places:**
   - Your data layer will also need to fetch all the users and all the places.
   - Create a `fetchUsers`, and `fetchPlaces` method and call them in your init method.
   - You should be able to see all of the users and all the places which have been created from the previous step.

5. **Create A Vacation:**
   - Now that you have both users and places, it's time to add the `createVacation` method to our `db.js` file.
   - `createVacation` should take an object which has a `departure_date` as well as `user_id` and `place_id`
   - Using Promise.all and `createVacation`, add some vacations.
   - Add a `fetchVacations` method so that we can see the vacations are created. Call this function after creating your vacations.

6. **Destroy A Vacation:**
   - Our data layer is almost complete. We have one more method to write.
   - We will want to be able to destroy a vacation.
   - Add a method named `destroyVacation` which takes an id for the vacation you want to destroy.
   - You can test this method by calling it in the init method after your vacations are seeded.
   - Make sure there is one less vacation after the vacation is destroyed.

7. **Create An Express Application and have it listen:**
   - At this point, we've got a complete data layer which can manage users, places, and vacations.
   - The next step is to create a RESTFUL API using an express application.
   - You'll need to install express (`npm i express`) and create an express application which listens on a port.

8. **Configuring The GET Routes:**
   - Let's start with our 3 GET routes.
   - GET `/api/users` should return an array of users
   - GET `/api/places` should return an array of places
   - GET `/api/vacations` should return an array of vacations
   - You can test all these routes by using curl or POSTMAN.

9. **Configuring the DELETE Route:**
   - Let's write a DELETE route which will have an id which it can use to destroy a vacation.
   - You can use curl or POSTMAN to test this route.

10. **Configuring the POST Route:**
    - We will also need a POST route which enables us to create a vacation.
    - The route should be a POST to `/api/vacations` and it should call `createVacation` with the `req.body`
    - You'll have to add the `express.json()` middleware in order for this to work.
    - You can use curl or POSTMAN to test this route.

This guide outlines the steps to create a RESTful API for managing vacations, users, and places, demonstrating how to work with PostgreSQL, Express.js, and various NPM packages to set up and manipulate a relational database.

