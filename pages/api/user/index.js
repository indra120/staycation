import { withIronSessionApiRoute } from 'iron-session/next'
import dbConnect from '../../../src/lib/dbConnect'
import authorization from '../../../src/middlewares/authorization'
import sessionOptions from '../../../src/lib/sessionOptions'

async function handler(req, res) {
  authorization(req, res, async () => {
    await dbConnect()
    if (req.method === 'GET') {
      try {
        const { user } = req.session
        res.status(200).json({ user })
      } catch (error) {
        res.status(500).json({ message: error.message, status: 'danger' })
      }
    }
  })
}

export default withIronSessionApiRoute(handler, sessionOptions)