import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashesPassword = await bcrypt.hash(password, 10);
    const data = await User.create({
      fullname: fullname,
      email: email,
      password: hashesPassword,
    });

    res.status(201).json({ message: "User created successfully", user: data });
  } catch (error) {
    console.log("error", error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const hashesPassword = await bcrypt.hash(password, 10);
    const data = await User.findOne({ email: email });
    if (data) {
      const isMatch = await bcrypt.compare(password, data.password);
      if (isMatch) {
        res.status(200).json({ message: "User found..", user: data });
        return;
      } else {
        res.status(404).json({ message: "User not found.." });
      }
    } else { 
      res.status(404).json({ message: "User not found.." });
    }
  } catch (error) {
    console.log("error", error);
  }
};
