import { useSelector } from 'react-redux'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children }) {
  const user = useSelector(state => state.user)
  return (
    <div id='wrapper'>
      <Sidebar />

      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <Header username={user?.name} />

          <div className='container-fluid'>{children}</div>
        </div>

        <Footer />
      </div>
    </div>
  )
}