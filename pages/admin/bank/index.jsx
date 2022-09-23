import { withIronSessionSsr } from 'iron-session/next'
import sessionOptions from '../../../src/lib/sessionOptions'

export default function Bank() {
  return (
    <form action='/api/admin/bank?_method=PUT' method='POST' encType='multipart/form-data'>
      <div className='modal-body'>
        <div className='form-group'>
          <label for='bankName'>Bank Name</label>
          <input
            id='bankName'
            type='text'
            className='form-control'
            name='bankName'
            placeholder='Enter bank name'
            required
          />
        </div>
        <div className='form-group'>
          <label for='nomorRekening'>Nomor Rekening</label>
          <input
            id='nomorRekening'
            type='text'
            className='form-control'
            name='nomorRekening'
            placeholder='Enter nomor rekening'
            required
          />
        </div>
        <div className='form-group'>
          <label for='name'>Name</label>
          <input
            id='name'
            type='text'
            className='form-control'
            name='name'
            placeholder='Enter name'
            required
          />
        </div>
        <div className='form-group'>
          <label for='image'>Image</label>
          <input
            id='image'
            type='file'
            className='form-control'
            name='image'
          />
        </div>
        <input type="hidden" className="id" name="id" value='632c2d8ae0640a5fe49d0335' />
      </div>
      <button type='submit' className='btn btn-primary'>
        Add
      </button>
    </form>
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
