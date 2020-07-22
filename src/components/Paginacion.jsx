import React from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import {useParams} from 'react-router-dom'

const Paginacion = ({buscarPagina}) => {
    
    let { pagina } = useParams();

    pagina = pagina === undefined ? 1 : pagina

    buscarPagina(pagina)

    return (
        <Pagination 
            showFirstButton 
            showLastButton
            count={30}
            renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/personajes/${item.page === 1 ? '' : `${item.page}`}`}
                  {...item}
                />
            )}
        />
    )
}

export default Paginacion
