"use strict";

//============================================
// import the needed node_modules.
//============================================
const express = require("express");
const morgan = require("morgan");

//==============================================
// Handlers required
//==============================================

const {
  getAffirmations,
  addJournal,
  handleSignIn,
  test,
  getJournal,
} = require("./handlers");

//================================================
// Express
//================================================

express()
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))
  //=======================================================
  // Servers Endpoints
  //=======================================================

  // get an affirmation
  .get("/api/get-affirmations", getAffirmations)

  // @TEST @REMOVE ME
  .get("/api/test", test)

  // post update journal
  .post("/add-journal", addJournal)
  // get an affirmation
  .get("/api/get-journal", getJournal)

  // post sign in
  .post("/api/signin", handleSignIn)

  //=====================================================
  // Catch all endpoint & server port
  //======================================================

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
