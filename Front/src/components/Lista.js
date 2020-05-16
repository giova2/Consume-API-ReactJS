import React from 'react'
import useResources from '../api/useResources'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Item from './Item'

const useStyles = makeStyles({
    grid: {
        textAlign: 'center',
        margin: 'auto',
    },
    container:{
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,2989d8+50,7db9e8+100 */
        background: '#1e5799',
        background: '-moz-linear-gradient(-45deg,  #1e5799 0%, #2989d8 50%, #7db9e8 100%)',
        background: '-webkit-linear-gradient(-45deg,  #1e5799 0%,#2989d8 50%,#7db9e8 100%)',
        background: 'linear-gradient(135deg,  #1e5799 0%,#2989d8 50%,#7db9e8 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#1e5799", endColorstr="#7db9e8",GradientType=1 )',
    }
})

const Lista = () => {
    const classes = useStyles();
    const resources = useResources('');
    
    const renderResources = (resources) => {
        if(resources !== undefined){
            return resources.map( (res, index) => {
                return <Item key={index} data={res}/>
            } )
        }
        return ''
    }

    return (
        <Grid container spacing={1} className={ classes.container}>
            <Grid item xs={6} className={ classes.grid }>
                { renderResources(resources) }
            </Grid>
        </Grid>
    )
}

export default Lista