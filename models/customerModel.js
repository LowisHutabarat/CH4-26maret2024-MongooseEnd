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
  phoneNumber: {
    type: Number,
    required: true,
  },
  city: String,
  country: {
    type: String,
    required: true,
    default: "Indonesia",
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