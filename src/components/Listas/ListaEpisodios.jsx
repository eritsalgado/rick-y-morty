import React,{ useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PaginacionTabla from '../PaginacionTabla'

const columns = [
    { id: 'nombre', label: 'Nombre', minWidth: 200, align: 'left' },
    { id: 'episodio', label: 'Episodio', minWidth: 100, align: 'center' },
    { id: 'publicado', label: 'Publicado', minWidth: 100, align: 'right' },
];


  
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const ListaEpisodios = ({episodios, buscarPagina}) => {

    const rows = episodios;
    const classes = useStyles()
    const [page, setPage] = useState(0)

    const cambiarPagina = (event, newPage) => {
        setPage(newPage)
    };


    useEffect(()=>{
        buscarPagina(page + 1)
    },[page])

    return (
        <Grid container>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="Tabla con cabeceras fijas">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow hover key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.episode}</TableCell>
                            <TableCell align="right">{row.air_date}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <PaginacionTabla 
                    rows={rows}
                    page={page}
                    cambiarPagina={cambiarPagina}
                />
            </Paper>
            
        </Grid>
    )
}

export default ListaEpisodios
