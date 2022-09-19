import { useRouter } from 'next/router'
import AdminLayout from './admin/Layout'

export default function Layout({ children }) {
  const router = useRouter()

  if (router.pathname.includes('admin')) {
    if (router.pathname.includes('dashboard')) return <AdminLayout>{children}</AdminLayout>
    return <>{children}</>
  }
  return <>{children}</>
}