import mongoose from "mongoose";
import User from "../models/userInfo.js";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

export const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(409).json("User Already Exist");
    }

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });

    const accessToken = jwt.sign(
      { email: newUser.email, id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SEC,
      {
        expiresIn: "1d",
      }
    );
    const { password, ...others } = newUser._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(501).json(error);
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not exist");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(409).json("Invalid credentials!");

    const accessToken = jwt.sign(
      { email: user.email, id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC,
      {
        expiresIn: "1d",
      }
    );
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(501).json(error);
    console.log(error);
  }
};
