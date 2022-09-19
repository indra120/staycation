import { useSelector } from 'react-redux'

export default function Alert() {
  const alert = useSelector(state => state.alert)
  
  return (
    <div className={`alert alert-${alert?.status}`} role='alert'>
      {alert?.message}
    </div>
  )
}