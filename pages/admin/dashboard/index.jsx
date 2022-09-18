import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { withIronSessionSsr } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'
import Stylesheet from '../../../src/components/Stylesheet'
import Scripts from '../../../src/components/Scripts'
import Header from '../../../src/components/admin/Header'
import Sidebar from '../../../src/components/admin/Sidebar'
import Footer from '../../../src/components/admin/Footer'

const Logout = dynamic(() => import('../../../src/components/admin/Logout'), {
  ssr: false,
})

export default function Dashboard({ user }) {
  return (
    <>
      <Head>
        <title>Staycation | Dashboard</title>
      </Head>
      <Stylesheet fontAwesome googleFont sbAdmin dataTables />
      <Scripts jquery bootstrap sbAdmin />

      <div id='wrapper'>
        <Sidebar />

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Header username={user?.name} />

            <div className='container-fluid'>
              <h1 className='h3 mb-4 text-gray-800'>Dashboard</h1>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <Link href='#page-top' passHref>
        <a className='scroll-to-top rounded'>
          <i className='fas fa-angle-up'></i>
        </a>
      </Link>

      <Logout />
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
