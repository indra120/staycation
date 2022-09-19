import { useDispatch, useSelector } from 'react-redux'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { logout } from '../../redux/auth/thunk'

export default function Logout() {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div
      className='modal fade'
      id='logoutModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Ready to Leave?
            </h5>
            <button
              className='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>x</span>
            </button>
          </div>
          <div className='modal-body'>
            Select &ldquo;Logout&rdquo; below if you are ready to end your
            current session.
          </div>
          <div className='modal-footer'>
            <button
              className='btn btn-secondary'
              type='button'
              data-dismiss='modal'
            >
              Cancel
            </button>
            
            <button
              className={`btn btn-primary ${loading ? 'disabled' : ''}`}
              disabled={loading}
              onClick={() => dispatch(logout(router))}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}