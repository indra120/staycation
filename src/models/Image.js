import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Image || mongoose.model('Image', imageSchema)