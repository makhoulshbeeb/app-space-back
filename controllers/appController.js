import App from "../models/app.model.js";

export const getApp = async (req, res) => {
  const app = await App.findById(req.params.id);
  if (app) {
    res.json({
      _id: app._id,
      name: app.name,
      price: app.price,
      rating: app.rating,
      reviews: app.reviews,
    });
  } else {
    res.status(404).json({ message: "App not found" });
  }
};

export const getAllApps = async (req, res) => {
  try {
    const apps = await App.find(); 
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const createApp = async (req, res) => {
  const { name, price, rating, reviews } = req.body;
  const newApp = new App({ name, price, rating, reviews });
  await newApp.save();
  res.json(newApp);
};

export const getAppBySearch = async (req, res) => {
  try {
    const { search } = req.params;

   
    const searchRgx = new RegExp(search, 'i');


    const results = await App.find({ name: searchRgx });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
    