import { withIronSessionApiRoute } from 'iron-session/next'
import sessionOption from '../../../../src/lib/sessionOptions'
import dbConnect from '../../../../src/lib/dbConnect'
import Category from '../../../../src/models/Category'
import authorization from '../../../../src/middlewares/authorization'

async function handler(req, res) {
  await dbConnect()
  authorization(req, res, async () => {
    switch (req.method) {
      case 'GET':
        try {
          const category = await Category.find()
          res.status(200).json({ category })
        } catch (error) {
          res.status(500).json({ message: error.message, status: 'danger' })
        }
        break
      case 'POST':
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
        break
      case 'PUT':
        try {
          const { id, name } = req.body
          const category = await Category.findOneAndUpdate(
            id,
            {
              $set: {
                name,
              },
            },
            {
              new: true,
            }
          )
          
          res.status(200).json({
            category,
            message: 'Success Update Category',
            status: 'success',
          })
        } catch (error) {
          res.status(500).json({ message: error.message, status: 'danger' })
        }
    }
  })
}

export default withIronSessionApiRoute(handler, sessionOption)