import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: 25,
    border: '2px solid #31a020'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  detalles:{
    padding: 15,
    margin: 10
  },
  button: {
      margin:'auto'
  }
});


const Item = ({ data }) => {
    const classes = useStyles()

    const [ MostrarDetalles, setMostrarDetalles ] = useState(false)
    const verDetalles = () =>{
        setMostrarDetalles(!MostrarDetalles)
    }

    const detalles = () => {
        if(MostrarDetalles){
            return <Paper className={ classes.detalles } elevation={3}>
                    <Grid container >
                        <Grid item xs={12} >
                            <Typography>
                            Compañía:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography>
                            Nombre: { data.company.name }
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography>
                            Palabras clave: { data.company.catchPhrase }
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography>
                            bs: { data.company.bs }
                            </Typography>
                        </Grid>
                    </Grid>
            </Paper>
        }
    }

    return (
        <Card className={classes.card} >
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                { data.name}
                </Typography>
                <Typography variant="h5" component="h2">
                { data.email}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                { data.website }
                </Typography>
                    <Typography variant="body2" component="p">    
                        Calle:{ data.address.street }
                    </Typography>
                    <Typography variant="body2" component="p">
                        Suite: { data.address.suite }
                    </Typography>
                    <Typography variant="body2" component="p">
                        Ciudad: { data.address.city }
                    </Typography>
                    <Typography variant="body2" component="p">
                        Código postal: { data.address.zipcode }
                    </Typography>
                
            </CardContent>
            <CardActions >
                <Button size="small" 
                    className={ classes.button }
                    onClick={ () => verDetalles() }
                    >
                    { !MostrarDetalles && 'Más info'}
                    { MostrarDetalles && 'Menos info'}
                </Button>
            </CardActions>
            
            { detalles(MostrarDetalles) }
            
        </Card>
    )
}

export default Item
