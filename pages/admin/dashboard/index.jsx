import Head from 'next/head'
import { withIronSessionSsr } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Staycation | Dashboard</title>
      </Head>

      <h1 className='h3 mb-4 text-gray-800'>Dashboard</h1>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session
    if (user?.role === 'admin') {
      return {
        props: {},
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