import React from 'react'
import TablePagination from '@material-ui/core/TablePagination';

const PaginacionTabla = ({rows, rowsPerPage=10, page, cambiarPagina}) => {
    return (
        
        <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={cambiarPagina}
        />

    )
}

export default PaginacionTabla
