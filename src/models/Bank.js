import mongoose from 'mongoose'

const bankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Bank || mongoose.model('Bank', bankSchema)