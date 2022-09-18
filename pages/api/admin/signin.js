import bcrypt from 'bcryptjs'
import { withIronSessionApiRoute } from 'iron-session/next'
import Admin from '../../../src/models/Admin'
import dbConnect from '../../../src/lib/dbConnect'
import sessionOptions from '../../../src/lib/sessionOptions'

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect()

      const { username, password } = req.body
      const admin = await Admin.findOne({ username })
      if (!admin) {
        res
          .status(404)
          .json({ message: "User doesn't exist!", status: 'danger' })
        return
      }

      const isPasswordMatch = await bcrypt.compare(password, admin.password)
      if (!isPasswordMatch) {
        res.status(403).json({ message: 'Wrong password!', status: 'danger' })
        return
      }

      req.session.user = {
        id: admin._id,
        name: admin.username,
        role: 'admin',
      }

      await req.session.save()

      // res.redirect('/admin/dashboard')
      res.status(200).json('Success')
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default withIronSessionApiRoute(handler, sessionOptions)