const mongoose = require("mongoose");

//schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be exist"],
  },
  email: {
    type: String,
    unique: true,
  },
  // role untuk menentukan siapa yang ada di web
  role: {
    type: String,
    // enum diluar enum tidak bisa
    enum: ['admin','user'],
    default: 'user'
  },
  active: {
    type: Boolean,
    default: true,
  },
  photo: {
    type: String,
    default: "user-default.jpg",
  },
  password: {
    type: String,
  },
});

const Customer = mongoose.model("customer", customerSchema);

// const customerTest = new Customer({
//   name: "Blast",
//   email: "Blast@gmail.com",
//   // Jika ingin 0 maka gunakan string
//   phoneNumber: "88888886",
// });

// customerTest
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR :" + err);
//   });

module.exports = Customer;