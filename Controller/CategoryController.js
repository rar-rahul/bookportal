const express = require("express");
const Category = require("../Models/Categorys");

exports.addCategory = async (req, res) => {
  const category = new Category({
    categoryname: req.body.categoryName,
  });

  try {
    const saveCategory = await category.save();
    res.status(200).json({
      status: "Success",
      data: {
        saveCategory,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
    });
  }
};
