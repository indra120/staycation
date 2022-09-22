import nextConnect from 'next-connect'
import { withIronSessionApiRoute } from 'iron-session/next'
import sessionOptions from '../../../../src/lib/sessionOptions'
import dbConnect from '../../../../src/lib/dbConnect'
import Bank from '../../../../src/models/Bank'
import authorization from '../../../../src/middlewares/authorization'
import { uploadSingle } from '../../../../src/middlewares/multer'

const handler = nextConnect({
  onError: (error, req, res) =>
    res.status(500).json({ message: error.message, status: 'danger' }),
})

handler.use(uploadSingle)

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

export default handler

export const config = {
  api: {
    bodyParser: false,
  },
}