const assert = require("assert");

exports.insertDoc = (db, document, collection, callback) => {
  const col = db.collection(collection);
  return col.insert(document);
};

exports.findDocs = (db, collection, callback) => {
  const col = db.collection(collection);
  return col.find({}).toArray();
};

exports.removeDoc = (db, document, collection, callback) => {
  const col = db.collection(collection);
  return col.deleteOne(document);
};

// exports.removeDocbyId = (db, id, collection, callback) => {
//   db.collection<{_id: String}>(collection).deleteOne({_id:id}, (err, result) => {
//       assert.equal(err, null);
//       callback(result);
//     });
// };

exports.updateDoc = (db, document, update, collection, callback) => {
  const col = db.collection(collection);
  return col.updateOne(document, { $set: update }, null);
};
