import Head from 'next/head'
import Scripts from '../../src/components/Scripts'
import Stylesheet from '../../src/components/Stylesheet'

export default function Admin() {
  return (
    <>
      <Head>
        <title>Staycation | Login</title>
      </Head>
      <Stylesheet googleFont sbAdmin />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6 col-lg-12 col-md-9 mt-5'>
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-4'>Staycation</h1>
                      </div>
                      <form
                        className='user'
                        action='/admin/signin'
                        method='POST'
                      >
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control form-control-user'
                            name='username'
                            placeholder='Enter Username...'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type='password'
                            className='form-control form-control-user'
                            id='exampleInputPassword'
                            name='password'
                            placeholder='Password'
                          />
                        </div>

                        <button
                          type='submit'
                          className='btn btn-primary btn-user btn-block'
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
