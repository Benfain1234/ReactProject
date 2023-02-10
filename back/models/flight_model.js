const mongoose = require("mongoose");

// Flight Modal Schema
const flightSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },

  category: {
    type: String,

    enum: ["Asia", "Africa", "North America", "South America", "Europe","Australia"],
    
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    min: 0,
  },
  sum:{
    type: Number,
    min: 0 ,
  },
  totalPrice:{
    type: Number,
    min: 0,
  }
});

const Flight = mongoose.model("Flight", flightSchema);
module.exports = {Flight};