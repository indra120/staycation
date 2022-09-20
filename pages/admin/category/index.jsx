import dynamic from 'next/dynamic'
import Head from 'next/head'
import { withIronSessionSsr } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'
import Alert from '../../../src/components/Alert'

const Table = dynamic(
  () => import('../../../src/components/admin/category/Table'),
  { ssr: false }
)

const AddModal = dynamic(
  () => import('../../../src/components/admin/category/modal/Add'),
  { ssr: false }
)

const EditModal = dynamic(
  () => import('../../../src/components/admin/category/modal/Edit'),
  { ssr: false }
)

export default function Category() {
  return (
    <>
      <Head>
        <title>Staycation | Category</title>
      </Head>
      <Alert />
      <h1 className='h3 mb-4 text-gray-800'>Category</h1>
      <Table />
      <AddModal />
      <EditModal />
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
