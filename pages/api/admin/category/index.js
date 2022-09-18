import { withIronSessionApiRoute } from 'iron-session/next'
import sessionOption from '../../../../src/lib/sessionOptions'
import dbConnect from '../../../../src/lib/dbConnect'
import Category from '../../../../src/models/Category'
import authorization from '../../../../src/middlewares/authorization'

async function handler(req, res) {
  await dbConnect()
  switch (req.method) {
    case 'POST':
      authorization(req, res, async () => {
        try {
          const { name } = req.body
          const category = await Category.create({ name })
          res.status(201).json({
            category,
            message: 'Success Add Category',
            status: 'success',
          })
        } catch (error) {
          res.status(500).json({ message: error.message, status: 'danger' })
        }
      })
  }
}

export default withIronSessionApiRoute(handler, sessionOption)