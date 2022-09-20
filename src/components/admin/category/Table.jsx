import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../../redux/categories/thunk'

export default function Table() {
  const categories = useSelector(state => state.categories.all)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
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
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <button
                      className='btn btn-warning btn-circle btn-sm button-update'
                      data-toggle='modal'
                      data-target='#edit-modal'
                      onClick={() =>
                        dispatch({
                          type: 'categories/select',
                          payload: { data: category, index },
                        })
                      }
                    >
                      <i className='fas fa-edit'></i>
                    </button>

                    <button className='btn btn-danger btn-circle btn-sm'>
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
