const express = require("express");
const userModel = require("../models/User.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authRouter = express.Router();

/* ================= REGISTER ================= */


authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "Email is already registered"
      });
    }

    const hash = crypto.createHash("md5").update(password).digest("hex");

    const user = await userModel.create({
      name,
      email,
      password: hash
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.cookie("jwt_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


/* ================= LOGIN ================= */

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found with this email"
      });
    }

    const hash = crypto.createHash("md5").update(password).digest("hex");
    const isPasswordMatched = user.password === hash;

    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.cookie("jwt_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    res.status(200).json({
      message: "User logged in",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


/* ================= PROTECTED ROUTE ================= */

authRouter.post("/protected", (req, res) => {
  try {
    const token = req.cookies.jwt_token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized — No token"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.status(200).json({
      message: "Access granted",
      userId: decoded.id
    });

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
});

module.exports = authRouter;
