import nextConnect from 'next-connect'
import fs from 'fs-extra'
import path from 'path'
import dbConnect from '../../../../src/lib/dbConnect'
import Bank from '../../../../src/models/Bank'

const handler = nextConnect({
  onError: (error, req, res) =>
    res.status(500).json({ message: error.message, status: 'danger' }),
})

handler.delete(async (req, res) => {
  await dbConnect()
  const { id } = req.query
  const bank = await Bank.findById(id)
  await fs.unlink(path.join(`public${bank.imageUrl}`))
  await bank.delete()

  res.status(200).json({
    message: 'Success Delete Bank',
    status: 'success',
  })
})

export default handler