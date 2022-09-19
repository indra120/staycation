import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Logout = dynamic(() => import('./Logout'), { ssr: false })

export default function Header() {
  const username = useSelector(state => state.user.name)
  return (
    <>
      <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
        <button
          id='sidebarToggleTop'
          className='btn btn-link d-md-none rounded-circle mr-3'
        >
          <i className='fa fa-bars'></i>
        </button>

        <ul className='navbar-nav ml-auto'>
          <div className='topbar-divider d-none d-sm-block'></div>

          <li className='nav-item dropdown no-arrow'>
            <Link href='#' passHref>
              <a
                className='nav-link dropdown-toggle'
                id='userDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='mr-2 d-none d-lg-inline text-gray-600 small'>
                  {username}
                </span>
              </a>
            </Link>

            <div
              className='dropdown-menu dropdown-menu-right shadow animated--grow-in'
              aria-labelledby='userDropdown'
            >
              <Link href='#' passHref>
                <a
                  className='dropdown-item'
                  data-toggle='modal'
                  data-target='#logoutModal'
                  role='button'
                >
                  <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400'></i>
                  Logout
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>

      <Logout />
    </>
  )
}