import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBank } from '../../../redux/bank/thunk'

export default function Table() {
  const bank = useSelector(state => state.bank.all)
  const dispatch = useDispatch()

  function select(bank) {
    dispatch({
      type: 'bank/select',
      payload: bank,
    })
  }

  useEffect(() => {
    dispatch(fetchBank())
  }, [])

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <button
          type='button'
          className='btn btn-primary'
          data-toggle='modal'
          data-target='#add-modal'
        >
          <i className='fas fa-plus'></i>
        </button>
      </div>
      <div className='card-body'>
        <div className='table-responsive'>
          <table
            className='table table-bordered'
            id='dataTable'
            width='100%'
            cellSpacing='0'
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Bank Name</th>
                <th>Nomor Rekening</th>
                <th>Name</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bank?.map((bank, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{bank.bankName}</td>
                  <td>{bank.nomorRekening}</td>
                  <td>{bank.name}</td>
                  <td>
                    <img src={bank.imageUrl} alt='imageUrl' width='70px' />
                  </td>
                  <td>
                    <button
                      className='btn btn-warning btn-circle btn-sm button-update'
                      data-toggle='modal'
                      data-target='#edit-modal'
                      onClick={() => select(bank)}
                    >
                      <i className='fas fa-edit'></i>
                    </button>

                    <button
                      className='btn btn-danger btn-circle btn-sm'
                      data-toggle='modal'
                      data-target='#delete-modal'
                      onClick={() => select(bank)}
                    >
                      <i className='fas fa-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
