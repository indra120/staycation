export default function authorization(req, res, next) {
  if (req.session.user == null || req.session.user == undefined) {
    res.redirect('/admin')
  } else {
    next()
  }
}