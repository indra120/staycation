import { useDispatch, useSelector } from 'react-redux'
import { deleteBank } from '../../../../redux/bank/thunk'

export default function Delete() {
  const id = useSelector(state => state.bank.selected.id)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(deleteBank(id))
  }

  return (
    <div
      className='modal fade'
      id='delete-modal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Delete Bank
            </h5>
            <button
              type='button'
              className='close'
              id='closeDeleteModal'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>Are you sure want to delete this?</div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              No
            </button>
            <button
              type='submit'
              className={`btn btn-primary ${loading ? 'disabled' : ''}`}
              disabled={loading}
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}