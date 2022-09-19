import { withIronSessionSsr } from 'iron-session/next'

export default function Category() {
  return <div>C</div>
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session
    if (user?.role === 'admin') {
      return {
        props: {
          user,
        },
      }
    }

    return {
      redirect: {
        permanent: false,
        destination: '/admin',
      },
    }
  },
  sessionOptions
)
