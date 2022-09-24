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

  let bank = await Bank.find()
  bank = bank.map(({ _id: id, name, bankName, nomorRekening, imageUrl }) => ({
    id,
    name,
    bankName,
    nomorRekening,
    imageUrl,
  }))

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

  let bank

  if (req.file == undefined) {
    const { id, name, bankName, nomorRekening } = req.body
    bank = await Bank.findByIdAndUpdate(
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
    const { id, name, bankName, nomorRekening } = req.body
    bank = await Bank.findById(id)
    await fs.unlink(path.join(`public${bank.imageUrl}`))
    bank.name = name
    bank.bankName = bankName
    bank.nomorRekening = nomorRekening
    bank.imageUrl = `/images/${req.file.filename}`
    await bank.save()
  }

  const { _id: id, name, bankName, nomorRekening, imageUrl } = bank

  res.status(200).json({
    bank: { id, name, bankName, nomorRekening, imageUrl },
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