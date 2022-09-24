import dynamic from 'next/dynamic'
import Head from 'next/head'
import { withIronSessionSsr } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'

const Alert = dynamic(
  () => import('../../../src/components/Alert'),
  { ssr: false }
)

const Table = dynamic(
  () => import('../../../src/components/admin/bank/Table'),
  { ssr: false }
)

const AddModal = dynamic(
  () => import('../../../src/components/admin/bank/modal/Add'),
  { ssr: false }
)

const EditModal = dynamic(
  () => import('../../../src/components/admin/bank/modal/Edit'),
  { ssr: false }
)

const DeleteModal = dynamic(
  () => import('../../../src/components/admin/bank/modal/Delete'),
  { ssr: false }
)

export default function Bank() {
  return (
    <>
      <Head>
        <title>Staycation | Bank</title>
      </Head>
      <Alert />
      <h1 className='h3 mb-4 text-gray-800'>Bank</h1>
      <Table />
      <AddModal />
      <EditModal />
      <DeleteModal />
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
