import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: 'images',
  filename: (_, file, cb) =>
    cb(null, `${Date.now()}${path.extname(file.originalname)}`),
})

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif|webp/
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimeType = fileTypes.test(file.mimetype)

  if (mimeType && extName) {
    return cb(null, true)
  } else {
    cb('Error: Images Only!')
  }
}

export const uploadSingle = multer({
  storage,
  fileFilter: (_, file, cb) => checkFileType(file, cb),
}).single('image')

export const uploadMultiple = multer({
  storage,
  fileFilter: (_, file, cb) => checkFileType(file, cb),
}).array('image')