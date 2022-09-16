import Head from 'next/head'

export default function Stylesheet({
  dataTables,
  fontAwesome,
  googleFont,
  sbAdmin,
}) {
  return (
    <Head>
      {fontAwesome && (
        <link href='/styles/fontawesome/all.min.css' rel='stylesheet' />
      )}
      {googleFont && (
        <link
          href='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
          rel='stylesheet'
        />
      )}
      {sbAdmin && (
        <link href='/styles/sb-admin-2/sb-admin-2.min.css' rel='stylesheet' />
      )}
      {dataTables && (
        <link
          href='/styles/datatables/dataTables.bootstrap4.min.css'
          rel='stylesheet'
        />
      )}
    </Head>
  )
}