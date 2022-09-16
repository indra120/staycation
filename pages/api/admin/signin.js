import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Admin from '../../../src/models/Admin'
import dbConnect from '../../../src/lib/dbConnect'

export default async function handler(req, res) {
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

      const accessToken = jwt.sign(
        { id: admin._id, username: admin.username },
        'secret',
        {
          expiresIn: '1h',
        }
      )

      res.status(201).json({ accessToken })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
