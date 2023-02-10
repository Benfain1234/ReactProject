const mongoose = require("mongoose");

// Flight Modal Schema
const AdminSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
 
});

const      Admin  = mongoose.model("Admin", AdminSchema);
module.exports = {Admin};