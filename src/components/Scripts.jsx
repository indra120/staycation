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
      {jquery && <Script defer strategy='beforeInteractive' id='jquery' src='/scripts/jquery.min.js' />}

      {bootstrap && <Script defer strategy='beforeInteractive' id='bootstrap' src='/scripts/bootstrap.bundle.min.js' />}

      {jqueryEasing && (
        <Script defer strategy='beforeInteractive' id='jqueryEasing' src='/scripts/jquery.easing.min.js' />
      )}

      {sbAdmin && <Script defer strategy='beforeInteractive' id='sbAdmin' src='/scripts/sb-admin-2.min.js' />}

      {jqueryDataTables && (
        <Script defer strategy='beforeInteractive' id='jqueryDataTables' src='/scripts/jquery.dataTables.min.js' />
      )}

      {bootstrapDataTables && (
        <Script defer strategy='beforeInteractive'
          id='bootstrapDataTables'
          src='/scripts/dataTables.bootstrap4.min.js'
        />
      )}

      {dataTablesDemo && (
        <Script defer strategy='beforeInteractive' id='dataTablesDemo' src='/scripts/datatables-demo.js' />
      )}

      {ckeditor && (
        <Script defer strategy='beforeInteractive'
          id='ckeditor'
          src='https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js'
        />
      )}
    </>
  )
}