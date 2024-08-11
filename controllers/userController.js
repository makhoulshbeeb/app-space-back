import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  const { name,username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      
      name,
      username,
      email,
      password,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      username:user.username,
      email: user.email,
      token: user.generateAuthToken(),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: user.generateAuthToken(),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
