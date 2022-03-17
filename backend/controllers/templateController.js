import express from "express";
import mongoose from "mongoose";
import TemplateModel from "../models/Template.js";

export const getDoc = async (req, res) => {
  try {
    res.status(200).json("get request success");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDoc = async (req, res) => {
  try {
    res.status(200).json("create request success");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateDoc = async (req, res) => {
  const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send(`No item with id: ${id}`);

  try {
    res.status(200).json({ id, message: "update request success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteDoc = async (req, res) => {
  const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send(`No item with id: ${id}`);

  try {
    res.status(200).json({ id, message: "delete request success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
