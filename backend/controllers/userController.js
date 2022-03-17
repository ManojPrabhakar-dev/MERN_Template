import mongoose from "mongoose";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    res.status(200).json("get users success");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    res.status(200).json("update user success");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
