import nextConnect from 'next-connect'
import fs from 'fs-extra'
import path from 'path'
import dbConnect from '../../../../src/lib/dbConnect'
import Bank from '../../../../src/models/Bank'
import { uploadSingle } from '../../../../src/middlewares/multer'

const handler = nextConnect({
  onError: (error, req, res) =>
    res.status(500).json({ message: error.message, status: 'danger' }),
})

handler.use(uploadSingle)

handler.get(async (req, res) => {
  await dbConnect()

  const bank = await Bank.find()
  res.status(200).json({ bank })
})

handler.post(async (req, res) => {
  await dbConnect()

  const { name, bankName, nomorRekening } = req.body
  const bank = await new Bank({
    name,
    bankName,
    nomorRekening,
    imageUrl: `/images/${req.file.filename}`,
  }).save()

  res.status(201).json({
    bank,
    message: 'Success Add Bank',
    status: 'success',
  })
})

handler.put(async (req, res) => {
  await dbConnect()

  const { id, name, bankName, nomorRekening } = req.body

  if (req.file == undefined) {
    await Bank.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          bankName,
          nomorRekening,
        },
      },
      {
        new: true,
      }
    )
  } else {
    await fs.unlink(path.join(`public/${Bank.imageUrl}`))
    await Bank.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          bankName,
          nomorRekening,
          imageUrl: `images/${req.file.filename}`,
        },
      },
      {
        new: true,
      }
    )
  }

  res.status(200).json({
    message: 'Success Update Bank',
    status: 'success',
  })
})

export default handler

export const config = {
  api: {
    bodyParser: false,
  },
}