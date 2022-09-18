import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  itemId: [
    {
      type: Object,
      ref: 'Item',
    },
  ],
})

export default mongoose.models.Category || mongoose.model('Category', categorySchema)