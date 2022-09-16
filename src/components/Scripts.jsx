import Script from 'next/script'

export default function Scripts({
  jquery,
  bootstrap,
  jqueryEasing,
  sbAdmin,
  jqueryDataTables,
  bootstrapDataTables,
  dataTablesDemo,
  ckeditor,
}) {
  return (
    <>
      {jquery && <Script defer id='jquery' src='/scripts/jquery.min.js' />}

      {bootstrap && <Script defer id='bootstrap' src='/scripts/jquery.min.js' />}

      {jqueryEasing && (
        <Script defer id='jqueryEasing' src='/scripts/jquery.easing.min.js' />
      )}

      {sbAdmin && <Script defer id='sbAdmin' src='/scripts/sb-admin-2.min.js' />}

      {jqueryDataTables && (
        <Script defer id='jqueryDataTables' src='/scripts/jquery.dataTables.min.js' />
      )}

      {bootstrapDataTables && (
        <Script defer
          id='bootstrapDataTables'
          src='/scripts/dataTables.bootstrap4.min.js'
        />
      )}

      {dataTablesDemo && (
        <Script defer id='dataTablesDemo' src='/scripts/datatables-demo.js' />
      )}

      {ckeditor && (
        <Script defer
          id='ckeditor'
          src='https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js'
        />
      )}
    </>
  )
}