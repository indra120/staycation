import { useDispatch, useSelector } from 'react-redux'
import { addBank } from '../../../../redux/bank/thunk'

export default function Add() {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())

    dispatch(addBank(formData))
  }

  return (
    <div
      className='modal fade'
      id='add-modal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add Bank
            </h5>
            <button
              type='button'
              className='close'
              id='closeAddModal'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='modal-body'>
              <div className='form-group'>
                <label htmlFor='bankName'>Bank Name</label>
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
                <label htmlFor='nomorRekening'>Nomor Rekening</label>
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
                <label htmlFor='name'>Name</label>
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
                <label htmlFor='image'>Image</label>
                <input
                  id='image'
                  type='file'
                  className='form-control'
                  name='image'
                  required
                />
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button
                type='submit'
                className={`btn btn-primary ${loading ? 'disabled' : ''}`}
                disabled={loading}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
