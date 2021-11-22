const mongoose = require("express")
const { SchemaTypes } = require("mongoose")
const cartSchema = mongoose.Schema({
    user: {ref: "User", type: Schema.Types.ObjectID},
    AllPrice: {type: Number, default: 0},
    drugs: {ref: "drug", type: Schema.Types.ObjectID}
})
const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart