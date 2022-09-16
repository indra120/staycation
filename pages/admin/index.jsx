import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Stylesheet from '../../src/components/Stylesheet'
import Alert from '../../src/components/Alert'

export default function Admin() {
  const [state, setState] = useState({
    username: '',
    password: '',
    error: {},
  })
  const router = useRouter()

  function handleChange(e) {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { username, password } = state

      const response = await axios.post('/api/admin/signin', {
        username,
        password,
      })

      window.localStorage.setItem('accessToken', response.data.accessToken)
      router.push('/')
    } catch (error) {
      setState(prev => {
        if (error.response.status == 404) {
          return { ...prev, username: '', error: error.response.data }
        }
        return { ...prev, password: '', error: error.response.data }
      })
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) router.push('/')
  }, [])

  return (
    <>
      <Head>
        <title>Staycation | Login</title>
      </Head>
      <Stylesheet googleFont sbAdmin />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6 col-lg-12 col-md-9 mt-5'>
            {state.error?.status && (
              <Alert
                status={state.error.status}
                message={state.error.message}
              />
            )}
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
                        onSubmit={handleSubmit}
                      >
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control form-control-user'
                            name='username'
                            placeholder='Enter Username...'
                            value={state.username}
                            onChange={handleChange}
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
                            value={state.password}
                            onChange={handleChange}
                            required
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
