import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  itemId: {
    type: Object,
    ref: 'Item'
  }
})

export default mongoose.models.Feature || mongoose.model('Feature', featureSchema)