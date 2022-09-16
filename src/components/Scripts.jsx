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
      {jquery && <script defer src='/scripts/jquery.min.js'></script>}

      {bootstrap && (
        <script defer src='/scripts/bootstrap.bundle.min.js'></script>
      )}

      {jqueryEasing && (
        <script defer src='/scripts/jquery.easing.min.js'></script>
      )}

      {sbAdmin && <script defer src='/scripts/sb-admin-2.min.js'></script>}

      {jqueryDataTables && (
        <script defer src='/scripts/jquery.dataTables.min.js'></script>
      )}

      {bootstrapDataTables && (
        <script defer src='/scripts/dataTables.bootstrap4.min.js'></script>
      )}

      {dataTablesDemo && (
        <script defer src='/scripts/datatables-demo.js'></script>
      )}

      {ckeditor && (
        <script
          defer
          src='https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js'
        ></script>
      )}
    </>
  )
}