import { withIronSessionApiRoute } from 'iron-session/next'
import sessionOption from '../../../../src/lib/sessionOptions'
import dbConnect from '../../../../src/lib/dbConnect'
import Category from '../../../../src/models/Category'
import authorization from '../../../../src/middlewares/authorization'

async function handler(req, res) {
  authorization(req, res, async () => {
    await dbConnect()
    switch (req.method) {
      case 'GET':
        try {
          let categories = await Category.find()
          categories = categories.map(({ _id: id, name, itemId }) => ({
            id,
            name,
            itemId,
          }))
          res.status(200).json({ categories })
        } catch (error) {
          res.status(500).json({ message: error.message, status: 'danger' })
        }
        break
      case 'POST':
        try {
          const { name } = req.body
          const category = await new Category({ name }).save()

          res.status(201).json({
            category: {
              id: category._id,
              name: category.name,
              itemId: category.itemId,
            },
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
          await Category.findByIdAndUpdate(
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