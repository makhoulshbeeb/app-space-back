import App from "../models/app.model.js";


export const getApp = async (req, res) => {
    const app = await App.finfById(req.app._id);
    if(app){
        res.json({
            _id:app._id,
            name:app.name,
            price:app.price,
            rating:app.rating,
            reviews:app.reviews
        });
    }
    else{
        res.status(404).json({message:"App not found"})
    }
}

