import mongoose from "mongoose";
import { Schema } from "mongoose";  

const appSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviews: { type: String, required: true },
});
const App = mongoose.model("App", appSchema);
export default App;
