import { withIronSessionApiRoute } from 'iron-session/next'
import sessionOption from '../../../../src/lib/sessionOptions'
import dbConnect from '../../../../src/lib/dbConnect'
import Category from '../../../../src/models/Category'
import authorization from '../../../../src/middlewares/authorization'

async function handler(req, res) {
  authorization(req, res, async () => {
    if (req.method === 'DELETE') {
      await dbConnect()
      try {
        const { id } = req.query
        await Category.findByIdAndDelete(id)

        res.status(200).json({
          message: 'Success Delete Category',
          status: 'success',
        })
      } catch (error) {
        res.status(500).json({ message: error.message, status: 'danger' })
      }
    }
  })
}

export default withIronSessionApiRoute(handler, sessionOption)