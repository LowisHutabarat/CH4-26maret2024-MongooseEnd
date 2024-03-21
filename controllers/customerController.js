const fs = require("fs");

const Customer = require('./../models/customerModel')


const getCustomers = async (req, res, next) => {

  try {
  const customers = await Customer.find();
      res.status(200).json({
    status: "success",
    totalData: customers.length,
    requestAt: req.requestTime,
    data: {
      customers,
    },
  });

  } catch (err) {
    res.status(400).json({
      status : "fail",
      message : err.messagee
    })
  };
};

const getCustomerById = async (req, res, next) => {
  const id = req.params.id;
  try {
  // menggunakan array method utk membantu menemukan spesifik data
  const customer = await customer.finfById(id)

  res.status(200).json({
    status: "success",
    data: {
      customer,
    },
  });

  } catch (err) {
    res.status(400).json({
      status : "fail",
      message : err.messagee
    })
  };
};

const updateCustomer = async (req, res) => {
try {
  const id = req.params.id;

  const customer = await Customer.findByIdAndUpdate(id, req.body, {
  new: true,
  runValidators: true,
});
      res.status(200).json({
        status: "success",
        message: "berhasil update data",
        data: {
          customer,
        },
      });
} catch (err) {
  res.status(400).json({
    status: "fail",
    message: err.message,
  });
};

};


const deleteCustomer = async(req, res) => {
  try {
  const id = req.params.id;

  await Customer.findByIdAndDelete(id)
      res.status(200).json({
        status: "success",
        message: "berhasil delete data",
      });
    } catch (err) {
      res.status(400).json ({
        status :"fail",
        message : err.message,
      });
    };
    };
const createCustomer = async (req, res) => {
  console.log(req.body);

  const newCustomer = await Customer.create(req.body);
      try { 
      res.status(201).json({
        status: "success",
        data: {
          customer: newCustomer,
        },
      });
    } catch (err) {
      res.status(400).json({
        status : "fail",
        message : err.message,
      });
    }
    };
  
module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
