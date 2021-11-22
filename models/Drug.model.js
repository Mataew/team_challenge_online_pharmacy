const mongoose = require('mongoose')

const drugSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  recipe: {
    type: Boolean,
    required: true
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Category"
  }
})

const Drug = mongoose.model("Drug", drugSchema)

module.exports = Drug