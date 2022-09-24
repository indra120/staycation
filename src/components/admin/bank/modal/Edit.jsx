import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editBank } from '../../../../redux/bank/thunk'

export default function Edit() {
  const { id, name, bankName, nomorRekening } = useSelector(
    state => state.bank.selected
  )
  const loading = useSelector(state => state.loading)
  const ref = {
    name: useRef(),
    bankName: useRef(),
    nomorRekening: useRef(),
  }
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())

    dispatch(editBank({ ...formData, id }))
  }

  useEffect(() => {
    ref.name.current.value = name
    ref.bankName.current.value = bankName
    ref.nomorRekening.current.value = nomorRekening
  }, [name, bankName, nomorRekening])

  return (
    <div
      className='modal fade'
      id='edit-modal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Edit Bank
            </h5>
            <button
              type='button'
              className='close'
              id='closeEditModal'
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
                  ref={ref.bankName}
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
                  ref={ref.nomorRekening}
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
                  ref={ref.name}
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
