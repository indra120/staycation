import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withIronSessionSsr } from 'iron-session/next'
import Head from 'next/head'
import Stylesheet from '../../src/components/Stylesheet'
import Alert from '../../src/components/Alert'
import { login } from '../../src/redux/auth/thunk'
import sessionOptions from '../../src/lib/sessionOptions'

export default function Admin() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const username = useRef()
  const password = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      login({
        username: username.current.value,
        password: password.current.value,
      })
    )
  }

  return (
    <>
      <Head>
        <title>Staycation | Login</title>
      </Head>
      <Stylesheet googleFont sbAdmin />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6 col-lg-12 col-md-9 mt-5'>
            {auth.error?.status && (
              <Alert status={auth.error.status} message={auth.error.message} />
            )}
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-4'>Staycation</h1>
                      </div>
                      <form className='user' onSubmit={handleSubmit}>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control form-control-user'
                            name='username'
                            placeholder='Enter Username...'
                            ref={username}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type='password'
                            className='form-control form-control-user'
                            id='exampleInputPassword'
                            name='password'
                            placeholder='Password'
                            ref={password}
                            required
                          />
                        </div>

                        <button
                          type='submit'
                          disabled={auth.loading}
                          className={`btn btn-primary btn-user btn-block ${auth.loading ? 'disabled' : ''}`}
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

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session
    if (user?.role === 'admin') {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      }
    }
    return {
      props: {},
    }
  },
  sessionOptions
)