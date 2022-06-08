"use strict";
const fetch = require('node-fetch');
const { findName } = require("./utils");

// mongodb and dotenv
require("dotenv").config();
const { MONGO_URI } = process.env;
const { MongoClient } = require("mongodb");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Database Name
const dbName = "Growth-Haven";
const affirmationsColl = "affirmations";

//=============================================
// **** Retrieve all items
//=============================================
const getAffirmations = async (req, res) => {
  try {
    // Create Mongo clients,
    const client = new MongoClient(MONGO_URI, options);

    //connect to its and to the database
    await client.connect();

    //connect to the database
    const db = client.db(dbName);

    //get all the affirmations
    const affirmations = await db.collection(affirmationsColl).find().toArray();

    // close the connection to the database server
    client.close();

    // if there is no items respond with 404
    if (affirmations.length > 0) {
      return res.status(200).json({ status: 200, data: affirmations });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Affirmations not found." });
    }
  } catch (err) {
    client.close();
    return res.status(500).json({ status: 500, message: err.message });
  }
};

const getJournal = async (req, res) => {
  try {
    // Create Mongo clients,
    const client = new MongoClient(MONGO_URI, options);

    //connect to its and to the database
    await client.connect();

    //connect to the database
    const db = client.db(dbName);

    //get all the affirmations
    const journal = await db.collection("blog-post").find().toArray();

    // close the connection to the database server
    client.close();

    // if there is no items respond with 404
    if (journal.length > 0) {
      return res.status(200).json({ status: 200, data: journal });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "journal not found." });
    }
  } catch (err) {
    client.close();
    return res.status(500).json({ status: 500, message: err.message });
  }
};

const addJournal = async (req, res) => {
  const { value } = req.body

  //Connect to client 
  try{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db(dbName);
      //Create a blog post 
   const blog = await db.collection("blog-post").insertOne(req.body);
     // If blog has been added to collection = success 
  if(blog){
    res.status(201).json({
      status: 201,
      message:"Success",
      data: value
    })
  } else {
    res.status(404).json({
      status: 404,
      message: "No input field value has been given",
      data: value
    });
  }
  }
  catch(err){
    return res.status(500).json({
      status: 500,
      data:req.body,
      message:err.message
    })
  }
}

const test = (req, res) => {
  fetch("http://zenquotes.io/api/quotes/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      res.status(200).json(data)
    });

}

//Handle Sign in
const handleSignIn = (request, response) => {
  const signInName = request.body.status;

  //return the user in the list of local users with the imported function findName : argument are local.users, and signInName that we get from body
  const user = findName(response.locals.users, signInName);

  //Establishing condition : if user in list res 200, else 404
  user
    ? sendResponse(response, 200, user)
    : sendResponse(response, 404, null, "user not found");
};

//========================================================
// Modules exports
//========================================================

module.exports = {
  getAffirmations,
  addJournal,
  handleSignIn,
  test,
  getJournal,
};
