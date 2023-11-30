const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//creating new collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.deleteOne({name:"Adam"}).then((res)=>{  //User.deleteMany();
  console.log(res);
});
 

// User.updateOne({ name: "Adam" }, { age: 50 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({age:{$gt:50}})
//   .then((res) => {
//     console.log(res); //res[0].name , res[0].age etc
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "tony", email: "tony123@gmail.com", age: 59 },
//   { name: "tarun", email: "tarun123@gmail.com", age: 40 },
//   { name: "tina", email: "tina123@gmail.com", age: 55 },
// ]).then((res)=>{
//     console.log(res);
// });

// const user1 = new User({
//   name: "Adam",
//   email: "adam@gmail.com",
//   age: 45,
// });

// const user2 = new User({
//   name: "Edam",
//   email: "edam@gmail.com",
//   age: 48,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
