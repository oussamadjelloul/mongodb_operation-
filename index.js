const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const Collection = require("mongodb/lib/collection");
const { resourceUsage } = require("process");
const url = "mongodb://localhost:27.017/";
const dbname = "conFusion";
const operator = require("./operation");
MongoClient.connect(url)
  .then((client) => {
    console.log("Connected coorectly to server");
    const db = client.db(dbname);
    operator
      // .removeDoc(db, { name: "ahmed", description: "this good man" }, "dishes")
      .insertDoc(
        db,
        { name: "oussama", descrtiption: "this is my work" },
        "dishes"
      )
      .then((result) => {
        console.log("Insert Document:\n", result);
        operator.findDocs(db, "dishes").then((result) => {
          console.log(result);
          client.close();
        });
      });
  })
  .catch((e) => {
    console.log(e);
  });
