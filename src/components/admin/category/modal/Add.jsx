export default function Add() {
  return (
    <div
      className='modal fade'
      id='add-modal'
      tabindex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add Category
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
                <label for='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
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
              <button type='submit' className='btn btn-primary'>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}