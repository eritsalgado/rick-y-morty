import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardActionArea, CardMedia, 
    CardContent, Grid, Typography,
    Button,
    makeStyles, 
    withWidth
} from '@material-ui/core'

const estilos = makeStyles(theme => ({
    cardMedia: {
        paddingTop: '81.25%',
        borderRadius: '50%',
        margin: '28px'
    },
    container: {
        paddingLeft: 16,
        paddingRight: 16
    }
}))
const ListaPersonajes = ({personajes, width, todosLosPersonajes, xl=4}) => {
    const classes = estilos()

    const {cardMedia, container} = classes
    
    const cartas = todosLosPersonajes ? 20 : width === 'lg' ? 7 : 5

    return (
        <Grid container spacing={3} className={container}>
            {
                personajes.map((personaje, index)=> (
                    index <= cartas ?
                    (<Grid 
                        key={personaje.id} 
                        item 
                        px={3} 
                        xs={6} 
                        sm={4} 
                        lg={3} 
                        xl={xl}
                    >
                        <Card className={classes.root}>
                            <CardActionArea
                                component={Link}
                                to={`/personaje/${personaje.id}`}
                            >
                                <CardMedia
                                className={cardMedia}
                                image={personaje.image}
                                title={`Especie: ${personaje.species}`}
                                />
                                <CardContent>
                                    <Typography 
                                        gutterBottom 
                                        variant="h5" 
                                        component="h2"
                                        align="center"
                                    >
                                        {`${personaje.name.split(" ")[0]}`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button 
                                variant="contained" 
                                color="primary"
                                fullWidth
                                size="large"
                                component={Link}
                                to={`/personaje/${personaje.id}`}
                            >
                              ver más
                            </Button>
                        </Card>
                    </Grid>) : null
                ))
            }
            
        </Grid>
    )
}

export default withWidth()(ListaPersonajes)
