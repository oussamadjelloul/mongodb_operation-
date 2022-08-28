const assert = require("assert");

exports.insertDoc = (db, document, collection, callback) => {
  const col = db.collection(collection);
  col.insert(document, (err, result) => {
    assert.equal(err, null);
    console.log("insert document ", result.result.n);
    callback(result);
  });
};

exports.findDocs = (db, collection, callback) => {
  const col = db.collection(collection);
  col.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    callback(docs);
  });
};

exports.removeDoc = (db, document, collection, callback) => {
  const col = db.collection(collection);
  col.deleteOne(document, (err, result) => {
    assert.equal(err, null);
    callback(result);
  });
};

// exports.removeDocbyId = (db, id, collection, callback) => {
//   db.collection<{_id: String}>(collection).deleteOne({_id:id}, (err, result) => {
//       assert.equal(err, null);
//       callback(result);
//     });
// };

exports.updateDoc = (db, document, update, collection, callback) => {
  const col = db.collection(collection);
  col.updateOne(document, { $set: update }, null, (err, result) => {
    assert.equal(err, null);
    console.log("Updated the document with ", update);
    callback(result);
  });
};
