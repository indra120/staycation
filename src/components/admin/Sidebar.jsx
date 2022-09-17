import Link from 'next/link'

export default function Sidebar() {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'
    >
      <Link
        className='sidebar-brand d-flex align-items-center justify-content-center'
        href='/'
      >
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fas fa-laugh-wink'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>Staycation</div>
      </Link>

      <hr className='sidebar-divider my-0' />

      <li className='nav-item'>
        <Link className='nav-link' href='/admin/dashboard'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Master</div>

      <li className='nav-item'>
        <Link className='nav-link' href='/admin/category'>
          <i className='fas fa-fw fa-list-alt'></i>
          <span>Category</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' href='/admin/bank'>
          <i className='fas fa-fw fa-money-check'></i>
          <span>Bank</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' href='/admin/item'>
          <i className='fas fa-fw fa-hotel'></i>
          <span>Item</span>
        </Link>
      </li>

      <div className='sidebar-heading'>Order</div>

      <li className='nav-item'>
        <Link className='nav-link' href='/admin/booking'>
          <i className='fas fa-fw fa-shopping-cart'></i>
          <span>Booking</span>
        </Link>
      </li>

      <hr className='sidebar-divider d-none d-md-block' />

      <div className='text-center d-none d-md-inline'>
        <button className='rounded-circle border-0' id='sidebarToggle'></button>
      </div>
    </ul>
  )
}