import { withIronSessionSsr } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'
import Alert from '../../../src/components/Alert'
import Table from '../../../src/components/admin/category/Table'
import AddModal from '../../../src/components/admin/category/modal/Add'
import EditModal from '../../../src/components/admin/category/modal/Edit'

export default function Category() {
  return (
    <>
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