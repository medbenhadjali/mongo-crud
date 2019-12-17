// Display all the contact list
db.contactList6.find().pretty();
// Display all the contact list having age>18 and name containing "ah"
db.contactList6.find({ age: { $gt: 18 }, "last name": { $regex: ".*ah.*" } });
// Display all the contact list having age>18
db.contactList6.find({
  age: {
    $gt: 18
  }
});
// Display all the information about only one person using his id
db.contactList6.find({ _id: ObjectId("5df8a2033725e615lkh854ln") });
// Change the contact first name of "kefi Seif" by "Kefi Anis"
db.contactList6.update(
  { "First name": "Seif" },
  { $set: { "First name": "mohamed" } }
);
// Delete the the contact list having age < 5
db.contactList6.deleteMany({
  age: {
    $lt: 5
  }
});
//   Display all the contact list
db.contactList6.find().pretty();
