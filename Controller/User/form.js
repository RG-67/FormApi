const mongoose = require("mongoose");
const Form = require('../../Model/form')

const addform = (req, res) => {
  let addData = {
    ...req.body,
    createdOn: Date.now(),
  };

  let formData= new Form(addData);
  formData
    .save()
    .then((data) => {
      res.status(200).json({
        status: true,
        message: "Form added successfully",
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: false,
        message: "Server error, please try again",
      });
    });
};


const viewForm = (req, res) => {
    Form.aggregate([
      {
        $match: {
          isDeleted: false,
        },
      },
      {
        $project: {
          createdOn: 0,
          isDeleted: 0,
          __v: 0,
        },
      },
    ])
      .then((data) => {
        res.status(200).json({
          status: true,
          message: " view form successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: false,
          message: "Server error,please try again",
        });
      });
  };

  const updateForm = (req, res) => {
    Form.findOneAndUpdate(
      {
        _id: { $in: [new mongoose.Types.ObjectId(req.params.id)] },
      },
      {
        $set: {
          ...req.body,
          updatedOn: new Date(),
        },
      }
    )
      .then((data) => {
        res.status(200).json({
          status: true,
          message: " form update successfully",
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: false,
          message: "Server error,please try again",
        });
      });
  };

module.exports={
    addform,
    viewForm,
    updateForm
}