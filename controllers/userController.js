import User from "../models/userModel.js";


export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
   
      token: user.generateAuthToken(),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
