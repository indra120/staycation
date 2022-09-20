import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editCategory } from '../../../../redux/categories/thunk'

export default function Edit() {
  const category = useSelector(state => state.categories.selected)
  const name = useRef()
  const dispatch = useDispatch()

  function handleSubmit() {
    dispatch(
      editCategory({
        id: category.data.id,
        index: category.index,
        name: name.current.value,
      })
    )
  }

  useEffect(() => {
    name.current.value = category?.data?.name
  }, [category?.data?.name])

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
              Update Category
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
          <form>
            <div className='modal-body'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  ref={name}
                  type='text'
                  className='form-control name'
                  name='name'
                  placeholder='Enter name'
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
                className='btn btn-primary'
                data-dismiss='modal'
                onClick={handleSubmit}
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
