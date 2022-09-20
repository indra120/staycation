import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Link from 'next/link'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Stylesheet from '../Stylesheet'
import Scripts from '../Scripts'
import { getUserData } from '../../redux/user/thunk'

export default function Layout({ children }) {
  const isLogin = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserData())
  }, [isLogin])

  return (
    <>
      <Stylesheet fontAwesome googleFont sbAdmin dataTables />
      <Scripts jquery bootstrap sbAdmin bootstrapDataTables jqueryDataTables dataTablesDemo />

      <div id='wrapper'>
        <Sidebar />

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Header />

            <div className='container-fluid'>{children}</div>
          </div>

          <Footer />
        </div>
      </div>

      <Link href='#page-top' passHref>
        <a className='scroll-to-top rounded'>
          <i className='fas fa-angle-up'></i>
        </a>
      </Link>
    </>
  )
}