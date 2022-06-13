"use strict";
const fetch = require("node-fetch");
const { findName } = require("./utils");
const users = require("./data/users.json");
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

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
  //Create journal post
  const journalPost = req.body.message;
  console.log("req.body.message", req.body.message);

  const monthlyDate = req.body.month
  console.log("monthlyDate", monthlyDate);
  const weeklyDate = req.body.week 
  console.log("weeklyDate ", weeklyDate );

  //Connect to client
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db(dbName);

    //Only if journalPost has input that you post
    if (journalPost.length > 0) {
      //Create a blog post and give it an Id
      const blog = await db
        .collection("blog-post")
        .insertOne({ id: uuidv4(), journalPost });

      res.status(201).json({
        status: 201,
        message: "Success",
        data: journalPost,
        monthlyDate: monthlyDate,
        weeklyDate:weeklyDate,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No input field value has been given",
        data: journalPost,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      data: journalPost,
      message: err.message,
    });
  }
};

//Fetch the quotes and send data to front-end
const getQuotes = (req, res) => {
  fetch("http://zenquotes.io/api/quotes/")
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    });
};

//Handle Sign in
const handleSignIn = async (req, res) => {
  const { email, password } = req.body;

  //Connect to the users database
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db(dbName);

    //Set the users into an array of object
    const users = db.collection("users");
    const allUsers = await users.find().toArray();

    //Set flag of current user false
    let isUserExist = false;

    //Look into all users
    allUsers.find((user) => {
      //Return true if user email and password match
      if (user.email === email && user.password === password) {
        return (isUserExist = true);
      }
    });

    //If user true return 201 else return 404
    isUserExist
      ? res.status(201).json({
          status: 201,
          message: "User exist",
        })
      : res.status(404).json({
          status: 404,
          message: "User not found",
        });
  } catch (err) {
    console.log("Error:", err.stack);
    res.status(500).json({ status: 500, message: "Error" });
  }
};

const handleNewUser = async (req, res) => {
  const { signInName, email, password } = req.body;

  //Condition to create a user
  if (!signInName || signInName.length < 0) {
    return res.status(400).json({
      status: 400,
      message: "Please provide your full name",
    });
  } else if (!email || !email.includes("@")) {
    return res.status(400).json({
      status: 400,
      message: "Please provide a valid email address",
    });
  } else if (!password || password.length < 10) {
    return res.status(400).json({
      status: 400,
      message: "Please provide a valid password",
    });
  } else {
    //Everything is successfull then connect to database
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db(dbName);

    // bundle key with req.body and create new user
    const newUser = Object.assign({ _id: uuidv4() }, req.body);

    res.status(201).json({
      status: 201,
      message: "Success",
      data: newUser,
    });
  }

  // // bundle key with req.body
  // const newUser = Object.assign({ _id: uuidv4() }, req.body);

  // //Connect to client
  // try {
  //   const client = new MongoClient(MONGO_URI, options);
  //   await client.connect();
  //   const db = client.db(dbName);
  //   //Create a user
  //   const user = await db.collection("users").insertOne(newUser);

  //   if (user) {
  //     res.status(201).json({
  //       status: 201,
  //       message: "Success",
  //       data: newUser,
  //     });
  //   } else {
  //     res.status(404).json({
  //       status: 404,
  //       message: "No user has been added",
  //       data: newUser,
  //     });
  //   }
  // } catch (err) {
  //   console.log("Error:", err.stack);
  //   res.status(500).json({ status: 500, data: err, message: "Error" });
  // }
};

module.exports = {
  getAffirmations,
  addJournal,
  handleSignIn,
  getQuotes,
  getJournal,
  handleNewUser,
};
