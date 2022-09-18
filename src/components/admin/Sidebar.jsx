import Link from 'next/link'

export default function Sidebar() {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'
    >
      <Link href='/' passHref>
        <a className='sidebar-brand d-flex align-items-center justify-content-center'>
          <div className='sidebar-brand-icon rotate-n-15'>
            <i className='fas fa-laugh-wink'></i>
          </div>
          <div className='sidebar-brand-text mx-3'>Staycation</div>
        </a>
      </Link>

      <hr className='sidebar-divider my-0' />

      <li className='nav-item'>
        <Link href='/admin/dashboard' passHref>
          <a className='nav-link'>
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </li>

      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Master</div>

      <li className='nav-item'>
        <Link href='/admin/category' passHref>
          <a className='nav-link'>
            <i className='fas fa-fw fa-list-alt'></i>
            <span>Category</span>
          </a>
        </Link>
      </li>

      <li className='nav-item'>
        <Link href='/admin/bank' passHref>
          <a className='nav-link'>
            <i className='fas fa-fw fa-money-check'></i>
            <span>Bank</span>
          </a>
        </Link>
      </li>

      <li className='nav-item'>
        <Link href='/admin/item' passHref>
          <a className='nav-link'>
            <i className='fas fa-fw fa-hotel'></i>
            <span>Item</span>
          </a>
        </Link>
      </li>

      <div className='sidebar-heading'>Order</div>

      <li className='nav-item'>
        <Link href='/admin/booking' passHref>
          <a className='nav-link'>
            <i className='fas fa-fw fa-shopping-cart'></i>
            <span>Booking</span>
          </a>
        </Link>
      </li>

      <hr className='sidebar-divider d-none d-md-block' />

      <div className='text-center d-none d-md-inline'>
        <button className='rounded-circle border-0' id='sidebarToggle'></button>
      </div>
    </ul>
  )
}