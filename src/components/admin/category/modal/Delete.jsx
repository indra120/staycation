import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory } from '../../../../redux/categories/thunk'

export default function Delete() {
  const { id } = useSelector(state => state.categories.selected)
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(deleteCategory(id))
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
              Delete Category
            </h5>
            <button
              type='button'
              className='close'
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
              className='btn btn-primary'
              data-dismiss='modal'
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
