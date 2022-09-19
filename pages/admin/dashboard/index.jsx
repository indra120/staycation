import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { withIronSessionSsr } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'

export default function Dashboard({ user }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'user/add', payload: user })
  }, [])

  return (
    <>
      <Head>
        <title>Staycation | Dashboard</title>
      </Head>

      <h1 className='h3 mb-4 text-gray-800'>Dashboard</h1>

      <Link href='#page-top' passHref>
        <a className='scroll-to-top rounded'>
          <i className='fas fa-angle-up'></i>
        </a>
      </Link>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session
    if (user?.role === 'admin') {
      return {
        props: {
          user,
        },
      }
    }

    return {
      redirect: {
        permanent: false,
        destination: '/admin',
      },
    }
  },
  sessionOptions
)