const sessionOptions = {
  cookieName: 'admin',
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

export default sessionOptions