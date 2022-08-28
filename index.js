const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const { resourceUsage } = require("process");
const url = "mongodb://localhost:27.017/";
const dbname = "conFusion";
const operator = require("./operation");
MongoClient.connect(url, (err, client) => {
  assert.equal(err, null);
  console.log("Connected coorectly to server");
  const db = client.db(dbname);
  operator.updateDoc(
    db,
    { name: "yassine" },
    { name: "oussama" },
    "dishes",
    (result) => {
      console.log(result);
      operator.findDocs(db, "dishes", (result) => {
        console.log(result);
        client.close();
      });
    }
  );
});
