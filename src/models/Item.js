import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: 'Indonesia',
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: 'night',
  },
  sumBooking: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: Object,
    ref: 'Category',
  },
  imageId: [
    {
      type: Object,
      ref: 'Image',
    },
  ],
  featureId: [
    {
      type: Object,
      ref: 'Feature',
    },
  ],
  activityId: [
    {
      type: Object,
      ref: 'Activity',
    },
  ],
})

export default mongoose.models.Item || mongoose.model('Item', itemSchema)