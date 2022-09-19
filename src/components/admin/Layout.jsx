import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
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
  )
}