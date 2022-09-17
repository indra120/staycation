import { withIronSessionApiRoute } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'

async function handler(req, res) {
  if (req.method === 'GET') {
    await req.session.destroy()
    res.redirect('/admin')
  }
}

export default withIronSessionApiRoute(handler, sessionOptions)