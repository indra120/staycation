import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Stylesheet from '../Stylesheet'
import Scripts from '../Scripts'
import { getUserData } from '../../redux/user/thunk'

export default function Layout({ children }) {
  const isLogin = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (!isLogin) router.push('/admin')
    dispatch(getUserData())
  }, [isLogin])

  return (
    <>
      <Stylesheet fontAwesome googleFont sbAdmin dataTables />
      <Scripts jquery bootstrap sbAdmin />

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
    </>
  )
}